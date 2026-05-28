"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

function useReveal(rootMargin = "-80px") {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          obs.disconnect();
        }
      },
      { rootMargin, threshold: 0.05 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [rootMargin]);

  return ref;
}

export function Gallery() {
  const labelRef   = useReveal();
  const panel1Ref  = useReveal("-40px");
  const panel2Ref  = useReveal("-40px");
  const panel3Ref  = useReveal("-40px");
  const panel4Ref  = useReveal("-40px");
  const panel5Ref  = useReveal("-40px");
  const panel6Ref  = useReveal("-40px");

  return (
    <section
      style={{
        background: "var(--craft-black)",
        borderTop: "1px solid var(--craft-border)",
        paddingTop: "6rem",
        paddingBottom: "6rem",
        paddingLeft: "var(--px)",
        paddingRight: "var(--px)",
      }}
      aria-label="Visual gallery"
    >
      {/* Section label — slides in from left */}
      <div ref={labelRef} className="reveal-left flex items-center gap-5 mb-16">
        <span
          className="text-[13px] tracking-[0.4em] uppercase"
          style={{ color: "var(--craft-orange)" }}
        >
          The Label
        </span>
        <div
          className="flex-1 h-px"
          style={{ background: "var(--craft-border)" }}
          aria-hidden="true"
        />
      </div>

      {/* Asymmetric editorial grid */}
      <div
        className="grid gap-1"
        style={{
          gridTemplateColumns: "repeat(12, 1fr)",
          gridTemplateRows: "280px 280px",
        }}
      >
        {/* Panel 1 — FMAP label, tall portrait — scales in */}
        <div
          ref={panel1Ref}
          className="reveal-scale relative overflow-hidden"
          style={{ gridColumn: "1 / 5", gridRow: "1 / 3" }}
        >
          <Image
            src="/fmap-label.jpg"
            alt="Farmers Market After Party label"
            fill
            className="object-cover object-center"
            sizes="33vw"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, rgba(10,8,6,0.75) 0%, rgba(10,8,6,0.1) 50%)",
            }}
            aria-hidden="true"
          />
          <div className="absolute bottom-6 left-6">
            <p
              className="text-[13px] tracking-[0.4em] uppercase mb-1"
              style={{ color: "rgba(200,120,20,0.9)" }}
            >
              Pilsner · 5.0%
            </p>
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.1rem",
                letterSpacing: "0.1em",
                color: "var(--craft-cream)",
              }}
            >
              FARMERS MARKET
            </p>
          </div>
        </div>

        {/* Panel 2 — Orange brand panel — rises from below */}
        <div
          ref={panel2Ref}
          className="reveal reveal-d1 relative overflow-hidden flex items-end p-7"
          style={{
            gridColumn: "5 / 8",
            gridRow: "1 / 2",
            background: "var(--craft-orange)",
          }}
        >
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg, rgba(0,0,0,0.4) 0px, rgba(0,0,0,0.4) 1px, transparent 1px, transparent 14px)",
            }}
            aria-hidden="true"
          />
          <p
            className="relative z-10 leading-[0.88]"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 4.5vw, 3.5rem)",
              color: "var(--craft-black)",
              letterSpacing: "0.02em",
            }}
          >
            THINK NY
            <br />
            DRINK NY
          </p>
        </div>

        {/* Panel 3 — TNO label, wide — scales in with slight delay */}
        <div
          ref={panel3Ref}
          className="reveal-scale reveal-d2 relative overflow-hidden"
          style={{ gridColumn: "8 / 13", gridRow: "1 / 2" }}
        >
          <Image
            src="/tno-label.jpg"
            alt="Troy Night Out label"
            fill
            className="object-cover object-center"
            sizes="40vw"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, rgba(10,8,6,0.7) 0%, rgba(10,8,6,0.1) 60%)",
            }}
            aria-hidden="true"
          />
          <div className="absolute bottom-6 left-6">
            <p
              className="text-[13px] tracking-[0.4em] uppercase mb-1"
              style={{ color: "rgba(196,83,26,0.9)" }}
            >
              Hazy IPA · 6.2%
            </p>
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.1rem",
                letterSpacing: "0.1em",
                color: "var(--craft-cream)",
              }}
            >
              TROY NIGHT OUT
            </p>
          </div>
        </div>

        {/* Panel 4 — Dark surface with Collar City type — slides from right */}
        <div
          ref={panel4Ref}
          className="reveal-right reveal-d2 relative overflow-hidden flex items-end p-7"
          style={{
            gridColumn: "5 / 8",
            gridRow: "2 / 3",
            background: "var(--craft-surface)",
            border: "1px solid var(--craft-border)",
          }}
        >
          <div className="w-full">
            <div
              className="w-full h-px mb-5"
              style={{ background: "var(--craft-border)" }}
              aria-hidden="true"
            />
            <p
              className="text-[13px] tracking-[0.4em] uppercase mb-3"
              style={{ color: "var(--craft-muted)" }}
            >
              Troy, NY · 518
            </p>
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                color: "var(--craft-cream)",
                lineHeight: 0.92,
                letterSpacing: "0.03em",
              }}
            >
              COLLAR
              <br />
              <span style={{ color: "var(--craft-orange)" }}>CITY</span>
            </p>
          </div>
        </div>

        {/* Panel 5 — Olive/earthy "Brewed in Troy" — rises from below */}
        <div
          ref={panel5Ref}
          className="reveal reveal-d3 relative overflow-hidden flex flex-col justify-between items-start p-7"
          style={{
            gridColumn: "8 / 11",
            gridRow: "2 / 3",
            background: "var(--craft-olive)",
          }}
        >
          <div
            className="absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg, white 0px, white 1px, transparent 1px, transparent 20px)",
            }}
            aria-hidden="true"
          />
          <p
            className="relative z-10 text-[13px] tracking-[0.4em] uppercase"
            style={{ color: "rgba(237,229,208,0.55)" }}
          >
            Brewed in
          </p>
          <p
            className="relative z-10"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.8rem, 3.5vw, 3rem)",
              color: "var(--craft-cream)",
              lineHeight: 0.92,
              letterSpacing: "0.01em",
            }}
          >
            TROY,
            <br />
            NEW YORK
          </p>
        </div>

        {/* Panel 6 — Dark with 518 stamp — scales in last */}
        <div
          ref={panel6Ref}
          className="reveal-scale reveal-d4 relative overflow-hidden flex flex-col justify-between items-start p-7"
          style={{
            gridColumn: "11 / 13",
            gridRow: "2 / 3",
            background: "var(--craft-charcoal)",
            border: "1px solid var(--craft-border)",
          }}
        >
          <p
            aria-hidden="true"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "3rem",
              color: "rgba(196,83,26,0.18)",
              lineHeight: 1,
              letterSpacing: "0.05em",
            }}
          >
            518
          </p>
          <div>
            <p
              className="text-[13px] tracking-[0.4em] uppercase mb-1"
              style={{ color: "var(--craft-muted)" }}
            >
              Troy, NY
            </p>
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.5rem",
                color: "var(--craft-cream)",
                letterSpacing: "0.05em",
                lineHeight: 1.1,
              }}
            >
              SMALL
              <br />
              <span style={{ color: "var(--craft-orange)" }}>BATCH</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
