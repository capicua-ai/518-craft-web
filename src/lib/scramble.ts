import { gsap } from "@/lib/gsap";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

/**
 * Fills `el` with per-character inline spans that scramble through random
 * uppercase letters and resolve left-to-right to `text`.
 *
 * Timing: 380ms base scramble + 70ms per character position.
 *
 * Returns a cleanup function that removes any still-running ticker callbacks
 * (useful when the component unmounts mid-animation).
 */
export function buildScramble(el: HTMLElement, text: string): () => void {
  el.innerHTML = text
    .split("")
    .map(
      (c) =>
        `<span style="display:inline">${
          c === " " ? " " : CHARS[Math.floor(Math.random() * CHARS.length)]
        }</span>`
    )
    .join("");

  el.style.opacity = "1";

  const spans = Array.from(el.querySelectorAll<HTMLElement>("span"));
  const originalChars = text.split("");
  const startTime = performance.now();
  const tickerFns: Array<() => void> = [];

  spans.forEach((span, i) => {
    const finalChar = originalChars[i];
    if (finalChar === " ") return;

    const resolveAt = i * 70 + 380; // ms
    let resolved = false;

    const tick = () => {
      if (resolved) return;
      if (performance.now() - startTime >= resolveAt) {
        span.textContent = finalChar;
        resolved = true;
        gsap.ticker.remove(tick);
      } else {
        span.textContent = CHARS[Math.floor(Math.random() * CHARS.length)];
      }
    };

    gsap.ticker.add(tick);
    tickerFns.push(tick);
  });

  return () => tickerFns.forEach((fn) => gsap.ticker.remove(fn));
}
