"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

const ITEMS: { text: string; orange?: boolean }[] = [
  { text: "TROY" },
  { text: "·", orange: true },
  { text: "518" },
  { text: "·", orange: true },
  { text: "SMALL BATCH", orange: true },
  { text: "·", orange: true },
  { text: "COLLAR CITY" },
  { text: "·", orange: true },
  { text: "CRAFT BREWERY" },
  { text: "·", orange: true },
  { text: "LANSINGBURG", orange: true },
  { text: "·", orange: true },
  { text: "INDEPENDENT" },
  { text: "·", orange: true },
  { text: "FARMERS MARKET" },
  { text: "·", orange: true },
  { text: "TROY NIGHT OUT", orange: true },
  { text: "·", orange: true },
  { text: "HAZY IPA" },
  { text: "·", orange: true },
  { text: "PILSNER" },
  { text: "·", orange: true },
];

function Strip({ aria }: { aria?: boolean }) {
  return (
    <div
      className="flex items-center gap-8 shrink-0 px-8"
      aria-hidden={aria}
    >
      {ITEMS.map(({ text, orange }, i) => (
        <span
          key={i}
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "0.95rem",
            letterSpacing: "0.32em",
            color: orange ? "var(--craft-orange)" : "var(--craft-muted)",
            whiteSpace: "nowrap",
          }}
        >
          {text}
        </span>
      ))}
    </div>
  );
}

export function Marquee() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const track = trackRef.current;
    if (!track) return;

    const tween = gsap.to(track, {
      xPercent: -50,
      repeat: -1,
      duration: 50,
      ease: "none",
    });

    // Hover → slow down
    const slow = () => tween.timeScale(0.25);
    const resume = () => gsap.to(tween, { timeScale: 1, duration: 0.4, ease: "power2.out" });

    track.addEventListener("mouseenter", slow);
    track.addEventListener("mouseleave", resume);

    return () => {
      tween.kill();
      track.removeEventListener("mouseenter", slow);
      track.removeEventListener("mouseleave", resume);
    };
  }, []);

  return (
    <div
      className="relative overflow-hidden"
      style={{
        background: "var(--craft-charcoal)",
        borderTop: "1px solid var(--craft-border)",
        borderBottom: "1px solid var(--craft-border)",
        paddingTop: "1.2rem",
        paddingBottom: "1.2rem",
      }}
    >
      <div
        ref={trackRef}
        className="flex"
        style={{ width: "max-content", willChange: "transform" }}
      >
        <Strip />
        <Strip aria />
      </div>
    </div>
  );
}
