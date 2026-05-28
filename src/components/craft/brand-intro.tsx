"use client";

import { useEffect, useRef } from "react";

export function BrandIntro() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const els = ref.current?.querySelectorAll(".reveal, .reveal-left") ?? [];
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      style={{
        background: "var(--craft-surface)",
        borderTop: "1px solid var(--craft-border)",
        borderBottom: "1px solid var(--craft-border)",
        padding: "4rem var(--px)",
      }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Eyebrow */}
        <div className="reveal-left flex items-center gap-5 mb-8">
          <div className="w-8 h-px" style={{ background: "var(--craft-orange)" }} aria-hidden="true" />
          <span className="text-[13px] tracking-[0.4em] uppercase" style={{ color: "var(--craft-orange)" }}>
            518 · Troy, NY
          </span>
        </div>

        {/* Main statement */}
        <p
          className="reveal reveal-d1"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2rem, 5vw, 4.2rem)",
            color: "var(--craft-cream)",
            lineHeight: 1.05,
            letterSpacing: "var(--track-display)",
            maxWidth: "820px",
          }}
        >
          Born in Troy, NY.{" "}
          <span style={{ color: "var(--craft-amber)" }}>Built around local culture,</span>{" "}
          local nights, and local people.
        </p>

        {/* Secondary line */}
        <p
          className="reveal reveal-d2 mt-5"
          style={{
            fontSize: "clamp(1rem, 2vw, 1.15rem)",
            color: "var(--craft-muted)",
            letterSpacing: "0.02em",
            maxWidth: "480px",
          }}
        >
          Two beers. Both named after real events in this city.
        </p>

        {/* Bottom rule + detail */}
        <div
          className="reveal reveal-d3 flex items-center gap-8 mt-10 pt-8"
          style={{ borderTop: "1px solid var(--craft-border)" }}
        >
          <span className="text-[13px] tracking-[0.4em] uppercase" style={{ color: "var(--craft-muted)" }}>
            Small batch · Independent
          </span>
          <div className="flex-1 h-px" style={{ background: "var(--craft-border)" }} aria-hidden="true" />
          <span className="text-[13px] tracking-[0.4em] uppercase" style={{ color: "var(--craft-muted)" }}>
            Pilsner · Hazy IPA
          </span>
        </div>
      </div>
    </section>
  );
}
