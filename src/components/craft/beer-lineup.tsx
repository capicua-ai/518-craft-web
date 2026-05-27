"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

const FMAP_TAGS = ["Crisp", "Bright", "Citrus-Forward", "Easy Drinking"];
const TNO_TAGS  = ["Juicy", "Hazy", "Tropical", "Bold"];

const FMAP_STATS = [
  { label: "Style",  value: "PILSNER",  color: "var(--craft-cream)",  large: false },
  { label: "ABV",    value: "5.0%",     color: "var(--craft-amber)",  large: true  },
  { label: "Origin", value: "Troy, NY", color: "var(--craft-cream)",  large: false },
];
const TNO_STATS = [
  { label: "Style",  value: "HAZY IPA", color: "var(--craft-cream)",  large: false },
  { label: "ABV",    value: "6.2%",     color: "var(--craft-orange)", large: true  },
  { label: "Origin", value: "Troy, NY", color: "var(--craft-cream)",  large: false },
];

function useParallax(speed = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return; // ✓ fix #1
    let raf: number;
    const update = () => {
      if (!ref.current) return;
      const parent = ref.current.parentElement;
      if (!parent) return;
      const rect = parent.getBoundingClientRect();
      const offset = (rect.top + rect.height / 2 - window.innerHeight / 2) * speed;
      ref.current.style.transform = `translateY(${offset}px)`;
    };
    const onScroll = () => { raf = requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { window.removeEventListener("scroll", onScroll); cancelAnimationFrame(raf); };
  }, [speed]);
  return ref;
}

function useRevealObserver(ref: React.RefObject<HTMLElement | null>) {
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
      { threshold: 0.08 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [ref]);
}

export function BeerLineup() {
  const fmapRef        = useRef<HTMLDivElement>(null);
  const tnoRef         = useRef<HTMLDivElement>(null);
  const fmapParallaxRef = useParallax(0.14);
  const tnoParallaxRef  = useParallax(0.14);
  useRevealObserver(fmapRef as React.RefObject<HTMLElement>);
  useRevealObserver(tnoRef  as React.RefObject<HTMLElement>);

  // Entrance refs
  const fmapCanWrapRef = useRef<HTMLDivElement>(null);
  const tnoCanWrapRef  = useRef<HTMLDivElement>(null);
  // Headline line refs (scramble)
  const fmapLine1Ref   = useRef<HTMLSpanElement>(null);
  const fmapLine2Ref   = useRef<HTMLSpanElement>(null);
  const tnoLine1Ref    = useRef<HTMLSpanElement>(null);
  const tnoLine2Ref    = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    // Set initial state via GSAP (keeps text visible when JS hasn't loaded yet)
    gsap.set([fmapLine1Ref.current, fmapLine2Ref.current, tnoLine1Ref.current, tnoLine2Ref.current], { opacity: 0 });

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      gsap.set([fmapLine1Ref.current, fmapLine2Ref.current, tnoLine1Ref.current, tnoLine2Ref.current], { opacity: 1 });
      return;
    }

    const ctx = gsap.context(() => {
      // ── FMAP can — flies in from below, tilted left ──
      gsap.from(fmapCanWrapRef.current, {
        y: 180,
        rotation: -16,
        opacity: 0,
        scale: 0.82,
        duration: 1.35,
        ease: "power3.out",
        scrollTrigger: { trigger: fmapRef.current, start: "top 78%" },
      });

      // ── TNO can — flies in from below, tilted right ──
      gsap.from(tnoCanWrapRef.current, {
        y: 180,
        rotation: 16,
        opacity: 0,
        scale: 0.82,
        duration: 1.35,
        ease: "power3.out",
        scrollTrigger: { trigger: tnoRef.current, start: "top 78%" },
      });

      // ── FMAP headline scramble ──
      ScrollTrigger.create({
        trigger: fmapRef.current,
        start: "top 78%",
        once: true,
        onEnter: () => {
          gsap.fromTo(
            [fmapLine1Ref.current, fmapLine2Ref.current],
            { filter: "blur(20px)", opacity: 0 },
            { filter: "blur(0px)", opacity: 1, duration: 1.1, ease: "power2.out", stagger: 0.16 }
          );
        },
      });

      // ── TNO headline scramble ──
      ScrollTrigger.create({
        trigger: tnoRef.current,
        start: "top 78%",
        once: true,
        onEnter: () => {
          gsap.fromTo(
            [tnoLine1Ref.current, tnoLine2Ref.current],
            { filter: "blur(20px)", opacity: 0 },
            { filter: "blur(0px)", opacity: 1, duration: 1.1, ease: "power2.out", stagger: 0.16 }
          );
        },
      });

      // ── FMAP ABV counter — counts up from 0 → 5.0% ──
      const fmapAbvEl = fmapRef.current?.querySelector<HTMLElement>("[data-abv-counter]");
      if (fmapAbvEl) {
        const fmapCounter = { val: 0 };
        gsap.to(fmapCounter, {
          val: 5.0,
          duration: 1.8,
          ease: "power2.out",
          onUpdate() {
            fmapAbvEl.textContent = fmapCounter.val.toFixed(1) + "%";
          },
          scrollTrigger: { trigger: fmapRef.current, start: "top 78%", once: true },
        });
      }

      // ── TNO ABV counter — counts up from 0 → 6.2% ──
      const tnoAbvEl = tnoRef.current?.querySelector<HTMLElement>("[data-abv-counter]");
      if (tnoAbvEl) {
        const tnoCounter = { val: 0 };
        gsap.to(tnoCounter, {
          val: 6.2,
          duration: 1.8,
          ease: "power2.out",
          onUpdate() {
            tnoAbvEl.textContent = tnoCounter.val.toFixed(1) + "%";
          },
          scrollTrigger: { trigger: tnoRef.current, start: "top 78%", once: true },
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="beers">

      {/* ── FMAP — Warm amber · Farmers Market ────────────────────────── */}
      <div
        ref={fmapRef}
        className="relative overflow-hidden"
        style={{ minHeight: "100vh", background: "#0F0B06" }}
      >
        {/* Label atmosphere */}
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          <Image
            src="/fmap-label.jpg"
            alt=""
            fill
            className="object-cover"
            style={{ filter: "blur(30px) saturate(0.6) brightness(0.14)", transform: "scale(1.12)" }}
            sizes="100vw"
          />
        </div>

        {/* Warm gradient overlay */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            background: [
              "radial-gradient(ellipse 70% 65% at 22% 55%, rgba(200,120,20,0.32) 0%, transparent 55%)",
              "radial-gradient(ellipse 45% 40% at 10% 70%, rgba(200,120,20,0.14) 0%, transparent 50%)",
              "radial-gradient(ellipse 40% 50% at 78% 30%, rgba(196,83,26,0.06) 0%, transparent 50%)",
              "linear-gradient(105deg, rgba(15,11,6,0.97) 0%, rgba(15,11,6,0.52) 46%, rgba(15,11,6,0.93) 100%)",
            ].join(", "),
          }}
        />

        {/* Watermark */}
        <div aria-hidden="true" className="hidden absolute bottom-0 right-[-2%] pointer-events-none select-none">
          <span style={{ fontFamily: "var(--font-display)", fontSize: "clamp(7rem, 18vw, 17rem)", color: "rgba(200,120,20,0.06)", lineHeight: 0.82, letterSpacing: "-0.02em" }}>
            FMAP
          </span>
        </div>

        {/* Content — asymmetric grid: image 55% · copy 45% */}
        <div
          className="relative grid grid-cols-1 md:grid-cols-[55%_45%]"
          style={{ minHeight: "100vh" }}
        >
          {/* Product photo — FMAP */}
          <div className="relative flex items-center justify-center min-h-[90vw] md:min-h-0 overflow-hidden">
            <div ref={fmapCanWrapRef}>
              <div ref={fmapParallaxRef} style={{ willChange: "transform" }}>
                <Image
                  src="/pilsner_can_alone.png"
                  alt="Farmers Market After Party Pilsner"
                  width={1536}
                  height={1024}
                  sizes="(max-width: 768px) 135vw, 55vw"
                  className="h-[90vw] w-auto md:h-[82vh] float-can"
                />
              </div>
            </div>
          </div>

          {/* Copy */}
          <div className="flex flex-col justify-center" style={{ paddingLeft: "var(--px)", paddingRight: "var(--px)", paddingTop: "6rem", paddingBottom: "6rem" }}>
            {/* Number + style */}
            <div className="reveal flex items-center gap-4 mb-10">
              <span style={{ fontFamily: "var(--font-display)", fontSize: "0.8rem", letterSpacing: "0.4em", color: "var(--craft-amber)" }}>01</span>
              <div className="w-8 h-px" style={{ background: "var(--craft-amber)" }} aria-hidden="true" />
              <span className="text-xs tracking-[0.4em] uppercase" style={{ color: "var(--craft-muted)" }}>Pilsner · 5.0% ABV</span>
            </div>

            <h2
              className="mb-8 leading-[0.88]"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.4rem, 5vw, 4.2rem)",
                letterSpacing: "var(--track-display)",
                color: "var(--craft-cream)",
              }}
            >
              <span ref={fmapLine1Ref} style={{ display: "block" }}>FARMERS MARKET</span>
              <span ref={fmapLine2Ref} style={{ display: "block", color: "var(--craft-amber)" }}>AFTER PARTY</span>
            </h2>

            <p className="reveal reveal-d2 leading-relaxed mb-7 max-w-sm" style={{ color: "var(--craft-muted)", fontSize: "1rem" }}>
              Local growers, makers, and neighbors fill the Downtown Troy Farmers Market every Saturday — totes in hand, community in their hearts. This is their beer.
            </p>

            {/* Flavor tags */}
            <div className="reveal reveal-d2 flex flex-wrap gap-2 mb-8">
              {FMAP_TAGS.map((tag) => (
                <span
                  key={tag}
                  className="text-xs tracking-[0.25em] uppercase"
                  style={{ border: "1px solid rgba(200,120,20,0.3)", color: "var(--craft-amber)", padding: "4px 10px" }}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Stats */}
            <div
              className="reveal reveal-d3 flex items-center gap-10 py-7 mb-8"
              style={{ borderTop: "1px solid var(--craft-border)", borderBottom: "1px solid var(--craft-border)" }}
            >
              {FMAP_STATS.map(({ label, value, color, large }) => (
                <div key={label}>
                  <p className="text-xs tracking-[0.4em] uppercase mb-1.5" style={{ color: "var(--craft-muted)" }}>{label}</p>
                  <p data-abv-counter={large ? "true" : undefined} style={{
                    fontFamily: "var(--font-display)",
                    fontSize: large ? "clamp(2.4rem, 4vw, 3.4rem)" : "1.35rem",
                    letterSpacing: large ? "var(--track-display)" : "0.05em",
                    lineHeight: large ? 0.88 : "auto",
                    color,
                  }}>{value}</p>
                </div>
              ))}
            </div>

            {/* CTA hidden until distribution is live */}
          </div>
        </div>
      </div>

      {/* ── TNO — Deep purple · Nightlife ─────────────────────────────── */}
      <div
        ref={tnoRef}
        className="relative overflow-hidden"
        style={{ minHeight: "100vh", background: "#080610" }}
      >
        {/* Label atmosphere */}
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          <Image
            src="/tno-label.jpg"
            alt=""
            fill
            className="object-cover"
            style={{ filter: "blur(28px) saturate(0.5) brightness(0.12)", transform: "scale(1.12)" }}
            sizes="100vw"
          />
        </div>

        {/* Purple/orange gradient overlay */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            background: [
              "radial-gradient(ellipse 65% 60% at 80% 55%, rgba(196,83,26,0.28) 0%, transparent 55%)",
              "radial-gradient(ellipse 40% 40% at 90% 70%, rgba(196,83,26,0.12) 0%, transparent 45%)",
              "radial-gradient(ellipse 60% 70% at 18% 40%, rgba(42,21,53,0.7) 0%, transparent 60%)",
              "linear-gradient(260deg, rgba(8,6,16,0.97) 0%, rgba(8,6,16,0.50) 48%, rgba(8,6,16,0.94) 100%)",
            ].join(", "),
          }}
        />

        {/* Watermark */}
        <div aria-hidden="true" className="hidden absolute bottom-0 left-[-1%] pointer-events-none select-none">
          <span style={{ fontFamily: "var(--font-display)", fontSize: "clamp(7rem, 18vw, 17rem)", color: "rgba(196,83,26,0.06)", lineHeight: 0.82, letterSpacing: "-0.02em" }}>
            TNO
          </span>
        </div>

        {/* Content — asymmetric grid: copy 45% · image 55% */}
        <div
          className="relative grid grid-cols-1 md:grid-cols-[45%_55%]"
          style={{ minHeight: "100vh" }}
        >
          {/* Copy */}
          <div className="flex flex-col justify-center" style={{ paddingLeft: "var(--px)", paddingRight: "var(--px)", paddingTop: "6rem", paddingBottom: "6rem" }}>
            {/* Number + style */}
            <div className="reveal flex items-center gap-4 mb-10">
              <span style={{ fontFamily: "var(--font-display)", fontSize: "0.8rem", letterSpacing: "0.4em", color: "var(--craft-orange)" }}>02</span>
              <div className="w-8 h-px" style={{ background: "var(--craft-orange)" }} aria-hidden="true" />
              <span className="text-xs tracking-[0.4em] uppercase whitespace-nowrap" style={{ color: "var(--craft-muted)" }}>Hazy IPA · 6.2% ABV</span>
            </div>

            <h2
              className="mb-8 leading-[0.88]"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.4rem, 5vw, 4.2rem)",
                letterSpacing: "var(--track-display)",
                color: "var(--craft-cream)",
              }}
            >
              <span ref={tnoLine1Ref} style={{ display: "block" }}>TROY</span>
              <span ref={tnoLine2Ref} style={{ display: "block", color: "var(--craft-orange)" }}>NIGHT OUT</span>
            </h2>

            <p className="reveal reveal-d2 leading-relaxed mb-7 max-w-sm" style={{ color: "var(--craft-muted)", fontSize: "1rem" }}>
              Every final Friday, live music fills the Collar City streets. That electric, end-of-month energy is exactly what Troy Night Out is brewed for.
            </p>

            {/* Flavor tags */}
            <div className="reveal reveal-d2 flex flex-wrap gap-2 mb-8">
              {TNO_TAGS.map((tag) => (
                <span
                  key={tag}
                  className="text-xs tracking-[0.25em] uppercase"
                  style={{ border: "1px solid rgba(196,83,26,0.3)", color: "var(--craft-orange)", padding: "4px 10px" }}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Stats */}
            <div
              className="reveal reveal-d3 flex items-center gap-10 py-7 mb-8"
              style={{ borderTop: "1px solid var(--craft-border)", borderBottom: "1px solid var(--craft-border)" }}
            >
              {TNO_STATS.map(({ label, value, color, large }) => (
                <div key={label}>
                  <p className="text-xs tracking-[0.4em] uppercase mb-1.5" style={{ color: "var(--craft-muted)" }}>{label}</p>
                  <p data-abv-counter={large ? "true" : undefined} style={{
                    fontFamily: "var(--font-display)",
                    fontSize: large ? "clamp(2.4rem, 4vw, 3.4rem)" : "1.35rem",
                    letterSpacing: large ? "var(--track-display)" : "0.05em",
                    lineHeight: large ? 0.88 : "auto",
                    color,
                  }}>{value}</p>
                </div>
              ))}
            </div>

            {/* CTA hidden until distribution is live */}
          </div>

          {/* Product photo — TNO */}
          <div className="relative flex items-center justify-center min-h-[90vw] md:min-h-0 overflow-hidden">
            <div ref={tnoCanWrapRef}>
              <div ref={tnoParallaxRef} style={{ willChange: "transform" }}>
                <Image
                  src="/ipa_can_alone.png"
                  alt="Troy Night Out Hazy IPA"
                  width={800}
                  height={1200}
                  sizes="(max-width: 768px) 60vw, 55vw"
                  className="h-[90vw] w-auto md:h-[82vh] float-can-delayed"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
