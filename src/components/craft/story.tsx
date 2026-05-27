"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

export function Story() {
  const sectionRef = useRef<HTMLElement>(null);
  const smallRef   = useRef<HTMLParagraphElement>(null);
  const batchRef   = useRef<HTMLParagraphElement>(null);
  const realRef    = useRef<HTMLParagraphElement>(null);
  const localRef   = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll(".reveal, .reveal-blur, .reveal-stamp, .reveal-instant, .reveal-glow-build, .reveal-scale, .reveal-left, .reveal-right") ?? [];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // ── GSAP: Story headline scramble ──
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      gsap.set([smallRef.current, batchRef.current, realRef.current, localRef.current], { opacity: 1 });
      return;
    }

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 82%",
        once: true,
        onEnter: () => {
          gsap.fromTo(
            [smallRef.current, batchRef.current, realRef.current, localRef.current],
            { filter: "blur(20px)", opacity: 0 },
            { filter: "blur(0px)", opacity: 1, duration: 1.1, ease: "power2.out", stagger: 0.14 }
          );
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="story"
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{
        background: "var(--craft-surface)",
        paddingTop: "7rem",
        paddingBottom: "7rem",
        paddingLeft: "var(--px)",
        paddingRight: "var(--px)",
      }}
    >
      {/* Warm ember light from bottom-left — heat from the city */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background: [
            "radial-gradient(ellipse 75% 55% at -5% 100%, rgba(196,83,26,0.20) 0%, transparent 58%)",
            "radial-gradient(ellipse 45% 35% at 8% 90%, rgba(200,120,20,0.08) 0%, transparent 48%)",
          ].join(", "),
        }}
      />

      {/* TROY watermark — anchored to the right so it sits behind the copy, not the display words */}
      <div
        className="hidden absolute pointer-events-none select-none"
        aria-hidden="true"
        style={{ right: "-4%", top: "50%", transform: "translateY(-50%)" }}
      >
        <span
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(12rem, 30vw, 27rem)",
            color: "rgba(242,232,213,0.02)",
            lineHeight: 1,
            whiteSpace: "nowrap",
            letterSpacing: "-0.02em",
          }}
        >
          TROY
        </span>
      </div>

      {/* Section label — divider extends to viewport edge */}
      <div className="relative z-10 reveal flex items-center gap-5 mb-16">
        <h2
          className="text-[11px] tracking-[0.4em] uppercase"
          style={{ color: "var(--craft-orange)" }}
        >
          The Story
        </h2>
        <div
          className="flex-1 h-px"
          style={{ background: "var(--craft-border)" }}
          aria-hidden="true"
        />
      </div>

      {/* Main two-column layout */}
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1px_1.5fr] items-start gap-0">

          {/* LEFT — stacked display words */}
          <div className="md:pr-16 mb-16 md:mb-0">

            {/* The unexpected thing: a glowing orange rule — no frame, no container */}
            <div
              className="reveal mb-8"
              style={{
                width: "2.5rem",
                height: "3px",
                background: "var(--craft-orange)",
                boxShadow: "0 0 16px rgba(196,83,26,0.65), 0 0 4px rgba(196,83,26,0.9)",
              }}
              aria-hidden="true"
            />

            <p ref={smallRef} className="leading-[0.86] text-[clamp(2.8rem,16vw,5.5rem)] md:text-[clamp(2.8rem,8vw,5.5rem)]" style={{ fontFamily: "var(--font-display)", color: "var(--craft-cream)",  letterSpacing: "var(--track-display)", opacity: 0 }}>SMALL</p>
            <p ref={batchRef} className="leading-[0.86] text-[clamp(2.8rem,16vw,5.5rem)] md:text-[clamp(2.8rem,8vw,5.5rem)]" style={{ fontFamily: "var(--font-display)", color: "var(--craft-orange)", letterSpacing: "var(--track-display)", opacity: 0 }}>BATCH.</p>
            <p ref={realRef}  className="leading-[0.86] text-[clamp(2.8rem,16vw,5.5rem)] md:text-[clamp(2.8rem,8vw,5.5rem)]" style={{ fontFamily: "var(--font-display)", color: "var(--craft-cream)",  letterSpacing: "var(--track-display)", opacity: 0 }}>REAL</p>
            <p ref={localRef} className="leading-[0.86] text-[clamp(2.8rem,16vw,5.5rem)] md:text-[clamp(2.8rem,8vw,5.5rem)]" style={{ fontFamily: "var(--font-display)", color: "var(--craft-orange)", letterSpacing: "var(--track-display)", opacity: 0 }}>LOCAL.</p>

            {/* Anchor meta — grounds the left column */}
            <div
              className="reveal reveal-d4 mt-10 pt-5 flex flex-col gap-1 lg:flex-row lg:items-center lg:gap-5"
              style={{ borderTop: "1px solid var(--craft-border)" }}
            >
              <span
                className="text-[11px] tracking-[0.35em] uppercase whitespace-nowrap"
                style={{ color: "var(--craft-muted)" }}
              >
                Troy, NY
              </span>
              <div className="hidden lg:block w-px h-3" style={{ background: "var(--craft-border)" }} aria-hidden="true" />
              <span
                className="text-[11px] tracking-[0.35em] uppercase whitespace-nowrap"
                style={{ color: "var(--craft-muted)" }}
              >
                Est. 518
              </span>
              <div className="hidden lg:block w-px h-3" style={{ background: "var(--craft-border)" }} aria-hidden="true" />
              <span
                className="text-[11px] tracking-[0.35em] uppercase whitespace-nowrap"
                style={{ color: "var(--craft-muted)" }}
              >
                Ind. Craft
              </span>
            </div>
          </div>

          {/* Vertical divider */}
          <div
            className="hidden md:block self-stretch"
            style={{
              width: "1px",
              background:
                "linear-gradient(to bottom, transparent, var(--craft-border) 12%, var(--craft-border) 88%, transparent)",
            }}
            aria-hidden="true"
          />

          {/* RIGHT — editorial copy */}
          <div className="reveal reveal-d1 md:pl-16 flex flex-col gap-6">
            {/* Lead — larger, lighter, cream */}
            <p
              className="leading-snug"
              style={{
                fontFamily: "var(--font-sans)",
                fontWeight: 300,
                fontSize: "clamp(1.25rem, 2.1vw, 1.65rem)",
                color: "var(--craft-cream)",
              }}
            >
              Born at the Saturday farmers market. Poured at the monthly block party. Brewed for the Collar City.
            </p>

            <div
              className="w-10 h-px"
              style={{ background: "var(--craft-orange)" }}
              aria-hidden="true"
            />

            <p className="leading-relaxed text-base" style={{ color: "var(--craft-muted)" }}>
              518 Craft is brewed and canned in Lansingburg, NY. Every beer we make is tied to this city — its rhythms, its people, its story. The Farmers Market After Party celebrates the growers and makers who gather at the Downtown Troy Farmers Market. Troy Night Out pours for the final Friday of the month.
            </p>

            <p
              className="leading-snug"
              style={{
                color: "var(--craft-cream)",
                fontSize: "clamp(1.1rem, 1.8vw, 1.3rem)",
                fontWeight: 300,
              }}
            >
              We don&apos;t make beer for everywhere.<br />We make it for here.
            </p>

            <p className="text-base leading-relaxed" style={{ color: "var(--craft-muted)" }}>
              If you know the 518, you already know what this is about.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
