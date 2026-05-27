"use client";

import { useEffect, useRef, useState } from "react";
import { Logo } from "@/components/craft/logo";

const STORAGE_KEY = "518craft_age_verified";

export function AgeGate() {
  const [visible, setVisible] = useState(false);

  const dialogRef  = useRef<HTMLDivElement>(null);
  const confirmRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const verified = sessionStorage.getItem(STORAGE_KEY);
    if (!verified) setVisible(true);
  }, []);

  // When the dialog appears, move focus to the confirm button
  useEffect(() => {
    if (!visible) return;
    confirmRef.current?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      // Escape is treated the same as "No, take me back"
      if (e.key === "Escape") {
        deny();
        return;
      }

      // Focus trap: cycle Tab through the two action buttons
      if (e.key !== "Tab") return;
      const focusable = Array.from(
        dialogRef.current?.querySelectorAll<HTMLElement>("button") ?? []
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last  = focusable[focusable.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [visible]); // eslint-disable-line react-hooks/exhaustive-deps

  function confirm() {
    sessionStorage.setItem(STORAGE_KEY, "1");
    setVisible(false);
  }

  function deny() {
    window.location.href = "https://www.responsibility.org/";
  }

  if (!visible) return null;

  return (
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label="Age verification"
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
      style={{
        background: "var(--craft-black)",
        paddingLeft: "var(--px)",
        paddingRight: "var(--px)",
      }}
    >
      {/* Atmospheric glow */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background: [
            "radial-gradient(ellipse 60% 50% at 50% 90%, rgba(196,83,26,0.14) 0%, transparent 60%)",
            "radial-gradient(ellipse 40% 35% at 20% 10%, rgba(200,120,20,0.06) 0%, transparent 50%)",
          ].join(", "),
        }}
      />

      <div className="relative flex flex-col items-center text-center max-w-sm w-full gap-10">
        {/* Logo */}
        <Logo className="h-14 w-auto" color="var(--craft-cream)" aria-hidden="true" />

        {/* Divider */}
        <div
          aria-hidden="true"
          className="w-8 h-px"
          style={{ background: "var(--craft-orange)", boxShadow: "0 0 12px rgba(196,83,26,0.6)" }}
        />

        {/* Headline */}
        <div className="flex flex-col gap-3">
          <p
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 8vw, 3rem)",
              color: "var(--craft-cream)",
              letterSpacing: "var(--track-display)",
              lineHeight: 0.9,
            }}
          >
            ARE YOU 21
            <br />
            <span style={{ color: "var(--craft-orange)" }}>OR OLDER?</span>
          </p>
          <p
            className="text-xs tracking-[0.3em] uppercase"
            style={{ color: "var(--craft-muted)" }}
          >
            518 is brewed for Troy nights.
            <br />
            You have to have seen a few.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <button ref={confirmRef} onClick={confirm} className="craft-cta w-full sm:w-auto">
            Yes, I&apos;m Good
          </button>
          <button
            onClick={deny}
            className="craft-cta-ghost w-full sm:w-auto"
            style={{ fontSize: "0.85rem" }}
          >
            Not Yet
          </button>
        </div>

        {/* Legal fine print */}
        <p
          className="text-xs tracking-[0.3em] uppercase"
          style={{ color: "var(--craft-muted)" }}
        >
          Drink local. Drink smart.
        </p>
      </div>
    </div>
  );
}
