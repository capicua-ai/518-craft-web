import { gsap } from "@/lib/gsap";

/**
 * Neon-tube double-flicker effect using GSAP.
 *
 * Pattern: [wait initialDelay] → flash1 → gap → flash2 → [static staticPause] → repeat
 *
 * Each flash uses asymmetric easing:
 *   – power3.in collapse  (~20 ms) — gas evacuates almost instantly
 *   – brief hold at near-zero opacity
 *   – power2.out recovery (~40 ms) — gas returns a touch slower
 *
 * This mirrors the physical behaviour of a neon tube discharge better than
 * instant opacity snaps. (DrawSVGPlugin requires SVGGeometryElement.getTotalLength(),
 * which <text> elements don't expose, so eased opacity is used instead.)
 *
 * @param el            .neon-troy-wrap wrapper element
 * @param initialDelay  Seconds to wait before the very first flicker (default 2s)
 * @param staticPause   Seconds of stability between double-flicker events (default 8s)
 * @returns             Cleanup function — call it in useEffect's return
 */
export function startNeonFlicker(
  el: Element,
  initialDelay = 2,
  staticPause = 8
): () => void {
  const tl = gsap.timeline({
    repeat: -1,
    repeatDelay: staticPause,
    delay: initialDelay,
  });

  // ── flash 1: fast collapse → brief hold → recovery ──
  tl.to(el, { opacity: 0.04, duration: 0.020, ease: "power3.in" })
    .to(el, { opacity: 1,    duration: 0.040, ease: "power2.out", delay: 0.012 });

  // ── gap between flashes + flash 2 ──
  tl.to(el, { opacity: 0.04, duration: 0.020, ease: "power3.in", delay: 0.13 })
    .to(el, { opacity: 1,    duration: 0.040, ease: "power2.out", delay: 0.012 });

  // After this the timeline waits `staticPause` seconds, then repeats.

  return () => {
    tl.kill();
    gsap.set(el, { opacity: 1 });
  };
}
