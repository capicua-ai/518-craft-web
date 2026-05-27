"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { Logo } from "@/components/craft/logo";
import { gsap } from "@/lib/gsap";
import { startNeonFlicker } from "@/lib/neon-flicker";

export function Hero() {
  const sectionRef  = useRef<HTMLElement>(null);
  const bgRef       = useRef<HTMLDivElement>(null);
  const craftedRef  = useRef<HTMLSpanElement>(null);
  const forTroyRef  = useRef<HTMLSpanElement>(null);
  const nightsRef   = useRef<HTMLSpanElement>(null);
  const neonWrapRef = useRef<HTMLSpanElement>(null);

  // Lock hero height to initial viewport height so resize never distorts the image
  useEffect(() => {
    if (sectionRef.current) {
      sectionRef.current.style.height = `${window.innerHeight}px`;
    }
  }, []);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      gsap.set([craftedRef.current, forTroyRef.current, nightsRef.current], { opacity: 1 });
      return;
    }

    const ctx = gsap.context(() => {
      // ── Parallax + subtle zoom as user scrolls out of the hero ──
      gsap.to(bgRef.current, {
        yPercent: 13,
        scale: 1.08,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.8,
          invalidateOnRefresh: true,
        },
      });

      // ── h1 lines — pure focus: blur → sharp ──
      gsap.fromTo(
        [craftedRef.current, forTroyRef.current, nightsRef.current],
        { filter: "blur(20px)", opacity: 0 },
        { filter: "blur(0px)", opacity: 1, duration: 1.4, ease: "power2.out", stagger: 0.18, delay: 0.2 }
      );
    }, sectionRef);

    // ── Neon flicker — random, organic, GSAP-driven ──
    const stopFlicker = neonWrapRef.current
      ? startNeonFlicker(neonWrapRef.current)
      : () => {};

    return () => {
      ctx.revert();
      stopFlicker();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{ background: "var(--craft-black)", height: "100svh" }}
    >
      {/* ── Hero photo — full bleed background with parallax ── */}
      <div
        ref={bgRef}
        aria-hidden="true"
        className="absolute pointer-events-none"
        style={{ inset: "-80px 0 0", willChange: "transform" }}
      >
        <Image
          src="/hero-v4.png"
          alt=""
          fill
          className="object-cover object-center hero-img-reveal"
          sizes="100vw"
          priority
        />
      </div>

      {/* ── Gradient overlays — left legibility + bottom blend ── */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background: [
            "linear-gradient(to right, rgba(13,10,7,0.97) 0%, rgba(13,10,7,0.88) 22%, rgba(13,10,7,0.38) 40%, rgba(13,10,7,0.05) 56%, rgba(13,10,7,0.00) 100%)",
            "linear-gradient(to top, rgba(13,10,7,0.75) 0%, rgba(13,10,7,0.35) 25%, transparent 50%)",
            "linear-gradient(to bottom, rgba(13,10,7,0.75) 0%, transparent 22%)",
          ].join(", "),
        }}
      />

      {/* ── Main layout ── */}
      <div className="relative flex" style={{ height: "100%" }}>

        {/* TEXT COLUMN */}
        <div
          className="flex flex-col justify-end md:justify-between pt-24 md:pt-28 pb-16 md:pb-14 relative z-10 w-full md:flex-[0_0_48%]"
          style={{ paddingLeft: "var(--px)", paddingRight: "var(--px)" }}
        >
          {/* Eyebrow — desktop: floats at top via justify-between */}
          <div className="hero-blur-in hero-blur-d5 hidden md:flex items-center gap-4">
            <div className="w-6 h-px" style={{ background: "var(--craft-orange)" }} aria-hidden="true" />
            <p className="text-[13px] tracking-[0.4em] uppercase" style={{ color: "var(--craft-muted)" }}>
              Troy · New York · 518
            </p>
          </div>

          {/* Headline */}
          <div>
            {/* Eyebrow — mobile: sits just above headline */}
            <div className="hero-blur-in hero-blur-d5 flex md:hidden items-center gap-4 mb-6">
              <div className="w-6 h-px" style={{ background: "var(--craft-orange)" }} aria-hidden="true" />
              <p className="text-[13px] tracking-[0.4em] uppercase" style={{ color: "var(--craft-muted)" }}>
                Troy · New York · 518
              </p>
            </div>

            <p className="hero-blur-in hero-blur-d5 text-[13px] tracking-[0.4em] uppercase mb-5" style={{ color: "var(--craft-orange)" }}>
              Independent Craft Brewery
            </p>
            <h1
              className="text-[clamp(3rem,18vw,10rem)] md:text-[clamp(3rem,10vw,10rem)]"
              style={{
                fontFamily: "var(--font-display)",
                color: "var(--craft-cream)",
                lineHeight: 0.88,
                letterSpacing: "var(--track-display)",
              }}
            >
              <span ref={craftedRef} style={{ display: "block", opacity: 0 }}>CRAFTED</span>
              <span className="neon-troy-wrap" ref={neonWrapRef}>
                {/* height:"0.88em" anchors the line height to match CRAFTED / NIGHTS. exactly */}
                <span ref={forTroyRef} style={{ display: "block", opacity: 0, position: "relative", height: "0.88em" }}>
                  <svg
                    aria-hidden="true"
                    style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", overflow: "visible" }}
                  >
                    <text
                      x="0"
                      y="85%"
                      fill="none"
                      stroke="#F5630A"
                      strokeWidth="2"
                      style={{ fontFamily: "var(--font-display)", fontSize: "1em", letterSpacing: "-0.02em" }}
                    >
                      FOR TROY
                    </text>
                  </svg>
                  <span className="sr-only">FOR TROY</span>
                </span>
              </span>
              <span ref={nightsRef}  style={{ display: "block", opacity: 0 }}>NIGHTS.</span>
            </h1>

            <div className="hero-blur-in hero-blur-d6 flex flex-wrap items-center gap-4 mt-10">
              <a href="#beers" className="craft-cta">Explore the Beers</a>
              <a href="#find-us" className="craft-cta-ghost">Find Us Locally</a>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div aria-hidden="true" className="absolute bottom-6 left-1/2 -translate-x-1/2">
        <div
          className="w-px h-12 mx-auto"
          style={{
            background: "linear-gradient(to bottom, transparent, rgba(196,83,26,0.6))",
            animation: "pulse 2.4s ease-in-out infinite",
          }}
        />
      </div>
    </section>
  );
}
