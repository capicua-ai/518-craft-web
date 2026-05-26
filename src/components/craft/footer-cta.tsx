"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

export function FooterCta() {
  const ref      = useRef<HTMLElement>(null);
  const drinkRef = useRef<HTMLSpanElement>(null);
  const stayRef  = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const els = ref.current?.querySelectorAll(".reveal, .reveal-blur, .reveal-stamp, .reveal-instant, .reveal-glow-build, .reveal-left, .reveal-right") ?? [];
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.15 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  // ── GSAP: "DRINK LOCAL. / STAY OUT LATE." headline scramble ──
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      gsap.set([drinkRef.current, stayRef.current], { opacity: 1 });
      return;
    }

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: ref.current,
        start: "top 80%",
        once: true,
        onEnter: () => {
          gsap.fromTo(
            [drinkRef.current, stayRef.current],
            { filter: "blur(20px)", opacity: 0 },
            { filter: "blur(0px)", opacity: 1, duration: 1.2, ease: "power2.out", stagger: 0.2 }
          );
        },
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden"
      style={{
        background: "var(--craft-charcoal)",
        borderTop: "1px solid var(--craft-border)",
        paddingTop: "6rem",
        paddingBottom: "6rem",
        paddingLeft: "var(--px)",
        paddingRight: "var(--px)",
      }}
    >
      {/* Atmospheric warm glow */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background: [
            "radial-gradient(ellipse 55% 60% at 50% 100%, rgba(196,83,26,0.12) 0%, transparent 60%)",
            "radial-gradient(ellipse 30% 40% at 20% 0%, rgba(200,120,20,0.06) 0%, transparent 50%)",
          ].join(", "),
        }}
      />

      {/* Horizontal rule */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(to right, transparent, var(--craft-orange) 30%, var(--craft-orange) 70%, transparent)",
          opacity: 0.35,
        }}
      />

      <div className="relative max-w-5xl mx-auto text-center">
        {/* Eyebrow */}
        <div className="reveal-left flex items-center justify-center gap-5 mb-10">
          <div
            className="h-px"
            style={{ width: "2rem", background: "var(--craft-orange)", opacity: 0.6 }}
            aria-hidden="true"
          />
          <span
            className="text-[11px] uppercase"
            style={{ color: "var(--craft-muted)", letterSpacing: "var(--track-label)" }}
          >
            518 · Troy, NY · Collar City
          </span>
          <div
            className="h-px"
            style={{ width: "2rem", background: "var(--craft-orange)", opacity: 0.6 }}
            aria-hidden="true"
          />
        </div>

        {/* Headline — "STAY OUT LATE." is the one uncontained glowing element */}
        <h2
          className="leading-[0.88] mb-12"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(3.5rem, 10vw, 9rem)",
            color: "var(--craft-cream)",
            letterSpacing: "var(--track-display)",
          }}
        >
          <span ref={drinkRef} style={{ display: "block", opacity: 0 }}>DRINK LOCAL.</span>
          <span ref={stayRef} className="glow-text" style={{ display: "block", color: "var(--craft-orange)", opacity: 0 }}>STAY OUT LATE.</span>
        </h2>

        {/* Sub */}
        <p
          className="reveal reveal-d2 mb-12 max-w-md mx-auto leading-relaxed"
          style={{ color: "var(--craft-muted)", fontSize: "1rem" }}
        >
          Two beers. One city. Every pour supports an independent brewery that
          calls Troy home.
        </p>

        {/* CTAs */}
        <div className="reveal reveal-d3 flex flex-wrap items-center justify-center gap-5">
          <a href="#find-us" className="craft-cta">
            Find a Location
          </a>
          <a href="#story" className="craft-cta-ghost">
            Our Story
          </a>
        </div>
      </div>
    </section>
  );
}
