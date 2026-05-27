"use client";

import { useEffect, useRef } from "react";
import { Clock, MapPin, CalendarDays, type LucideIcon } from "lucide-react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

interface Spot {
  num: string;
  name: string;
  detail: string;
  sub: string;
  subIcon?: LucideIcon;
  accent: string;
  hours: string;
  desc: string;
  dashed: boolean;
}

const SPOTS: Spot[] = [
  {
    num: "01",
    name: "Tasting Room",
    detail: "200 Broadway, Troy, NY 12180",
    sub: "518 Craft Bar",
    accent: "var(--craft-orange)",
    hours: "Mon–Thu 4–11pm · Fri–Sat 4pm–12am · Sun 4–10pm",
    desc: "Our home base. Come in, sit down, pour a pint. The tasting room is where 518 lives.",
    dashed: false,
  },
  {
    num: "02",
    name: "Farmers Market",
    detail: "River Street · Troy",
    sub: "Every Saturday",
    subIcon: CalendarDays,
    accent: "var(--craft-amber)",
    hours: "Sat · 9 am–2 pm",
    desc: "Local growers and makers fill the Downtown Troy Farmers Market year-round — totes in hand, community in their hearts. Find us there every Saturday.",
    dashed: false,
  },
];

export function FindUs() {
  const ref     = useRef<HTMLElement>(null);
  const comeRef = useRef<HTMLSpanElement>(null);
  const inRef   = useRef<HTMLSpanElement>(null);

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
      { threshold: 0.1 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  // ── GSAP: "COME IN." headline blur ──
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      gsap.set([comeRef.current, inRef.current], { opacity: 1 });
      return;
    }

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: ref.current,
        start: "top 80%",
        once: true,
        onEnter: () => {
          gsap.fromTo(
            [comeRef.current, inRef.current],
            { filter: "blur(20px)", opacity: 0 },
            { filter: "blur(0px)", opacity: 1, duration: 1.1, ease: "power2.out", stagger: 0.28 }
          );
        },
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="find-us"
      ref={ref}
      className="relative overflow-hidden"
      style={{
        background: "var(--craft-black)",
        borderTop: "1px solid var(--craft-border)",
        paddingTop: "6rem",
        paddingBottom: "6rem",
        paddingLeft: "var(--px)",
        paddingRight: "var(--px)",
      }}
    >
      {/* Section label */}
      <div className="reveal flex items-center gap-5 mb-16">
        <span
          className="text-[11px] tracking-[0.4em] uppercase"
          style={{ color: "var(--craft-orange)" }}
        >
          Find Us
        </span>
        <div
          className="flex-1 h-px"
          style={{ background: "var(--craft-border)" }}
          aria-hidden="true"
        />
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Headline */}
        <h2
          className="leading-[0.88] mb-16"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(3.5rem, 10vw, 8rem)",
            color: "var(--craft-cream)",
            letterSpacing: "var(--track-display)",
          }}
        >
          <span ref={comeRef} style={{ opacity: 0 }}>COME</span>
          {" "}
          <span ref={inRef} style={{ color: "var(--craft-orange)", opacity: 0 }}>IN.</span>
        </h2>

        {/* Location cards — 2-column grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2"
          style={{
            borderTop: "1px solid var(--craft-border)",
            borderLeft: "1px solid var(--craft-border)",
          }}
        >
          {SPOTS.map(({ num, name, detail, sub, subIcon: SubIcon, accent, hours, desc, dashed }, i) => (
            <div
              key={num}
              className="reveal group flex flex-col gap-5 py-10 px-8"
              style={{
                borderRight: "1px solid var(--craft-border)",
                borderBottom: dashed
                  ? "1px dashed rgba(255,255,255,0.1)"
                  : "1px solid var(--craft-border)",
                transitionDelay: `${i * 0.1}s`,
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "0.8rem",
                  letterSpacing: "0.4em",
                  color: dashed ? "var(--craft-muted)" : accent,
                }}
              >
                {num}
              </span>

              <div>
                <p
                  className="mb-3 leading-none"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(1.3rem, 2.5vw, 1.7rem)",
                    color: dashed ? "var(--craft-muted)" : "var(--craft-cream)",
                    letterSpacing: "0.04em",
                  }}
                >
                  {name.toUpperCase()}
                </p>

                {/* Address / location — with MapPin */}
                <div className="flex items-start gap-1.5 mb-1">
                  <MapPin
                    size={11}
                    aria-hidden="true"
                    style={{ color: "var(--craft-muted)", marginTop: "2px", flexShrink: 0 }}
                  />
                  <p className="text-sm" style={{ color: "var(--craft-muted)" }}>
                    {detail}
                  </p>
                </div>

                {/* Sub — with optional icon */}
                {SubIcon ? (
                  <div className="flex items-center gap-1.5">
                    <SubIcon
                      size={10}
                      aria-hidden="true"
                      style={{ color: "var(--craft-muted)" }}
                    />
                    <p
                      className="text-xs tracking-widest uppercase"
                      style={{ color: "var(--craft-muted)" }}
                    >
                      {sub}
                    </p>
                  </div>
                ) : (
                  <p
                    className="text-xs tracking-widest uppercase"
                    style={{ color: "var(--craft-muted)" }}
                  >
                    {sub}
                  </p>
                )}
              </div>

              <p
                className="text-base leading-relaxed flex-1"
                style={{ color: "var(--craft-muted)" }}
              >
                {desc}
              </p>

              {/* Hours — with Clock icon */}
              <div
                className="pt-5"
                style={{
                  borderTop: dashed
                    ? "1px dashed rgba(255,255,255,0.1)"
                    : "1px solid var(--craft-border)",
                }}
              >
                <div className="flex items-center gap-1.5 mb-1">
                  <Clock
                    size={10}
                    aria-hidden="true"
                    style={{ color: "var(--craft-muted)" }}
                  />
                  <p
                    className="text-xs tracking-[0.4em] uppercase"
                    style={{ color: "var(--craft-muted)" }}
                  >
                    Hours
                  </p>
                </div>
                <p
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1rem",
                    letterSpacing: "0.08em",
                    color: dashed ? "var(--craft-muted)" : accent,
                  }}
                >
                  {hours}
                </p>
              </div>

              <div
                className="w-8 h-px transition-all duration-500 group-hover:w-14"
                style={{ background: dashed ? "var(--craft-border)" : accent }}
                aria-hidden="true"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
