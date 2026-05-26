"use client";

import { Logo } from "@/components/craft/logo";
import { useEffect, useRef, useState } from "react";

const NAV_LINKS = [
  { label: "Beers",   href: "#beers"   },
  { label: "Story",   href: "#story"   },
  { label: "Find Us", href: "#find-us" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);

  const hamburgerRef = useRef<HTMLButtonElement>(null);
  const menuRef      = useRef<HTMLDivElement>(null);

  // Scroll → solid background
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  // Focus management: move focus in on open, trap Tab, close on Escape
  useEffect(() => {
    if (!open) return;

    // Move focus to the first link when the menu opens
    const firstFocusable = menuRef.current?.querySelector<HTMLElement>("a, button");
    firstFocusable?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      // Escape → close and restore focus to hamburger
      if (e.key === "Escape") {
        setOpen(false);
        hamburgerRef.current?.focus();
        return;
      }

      // Tab → trap focus inside the menu
      if (e.key !== "Tab") return;
      const focusable = Array.from(
        menuRef.current?.querySelectorAll<HTMLElement>("a[href], button:not([disabled])") ?? []
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
  }, [open]);

  return (
    <>
      {/* Skip link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:text-xs focus:uppercase focus:tracking-widest"
        style={{ background: "var(--craft-orange)", color: "var(--craft-cream)", fontFamily: "var(--font-display)", letterSpacing: "0.2em" }}
      >
        Skip to content
      </a>

      {/* ── Main nav bar ── */}
      <nav
        aria-label="Main navigation"
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between py-3"
        style={{
          paddingLeft: "var(--px)",
          paddingRight: "var(--px)",
          background: scrolled
            ? "rgba(13,10,7,0.97)"
            : "linear-gradient(to bottom, rgba(13,10,7,0.96) 0%, transparent 100%)",
          borderBottom: scrolled ? "1px solid var(--craft-border)" : "none",
          backdropFilter: scrolled ? "blur(8px)" : "none",
          transition: "background 0.35s ease, border-color 0.35s ease, backdrop-filter 0.35s ease",
        }}
      >
        {/* Logo */}
        <a href="/" aria-label="518 Craft — home">
          <Logo className="h-14 w-auto" color="var(--craft-cream)" aria-hidden="true" />
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="text-xs tracking-[0.35em] uppercase transition-colors duration-200 hover:text-craft-cream"
              style={{ color: "var(--craft-muted)" }}
            >
              {label}
            </a>
          ))}
        </div>

        {/* Mobile — hamburger */}
        <button
          ref={hamburgerRef}
          className="md:hidden relative flex flex-col justify-center items-center w-11 h-11"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {/* Bar 1 */}
          <span
            className="absolute block w-5 h-px"
            style={{
              background: "var(--craft-cream)",
              transition: "transform 0.3s var(--motion-ease-out)",
              transform: open ? "translateY(0) rotate(45deg)" : "translateY(-6px)",
            }}
          />
          {/* Bar 2 */}
          <span
            className="absolute block w-5 h-px"
            style={{
              background: "var(--craft-cream)",
              transition: "opacity 0.2s ease",
              opacity: open ? 0 : 1,
            }}
          />
          {/* Bar 3 */}
          <span
            className="absolute block w-5 h-px"
            style={{
              background: "var(--craft-cream)",
              transition: "transform 0.3s var(--motion-ease-out)",
              transform: open ? "translateY(0) rotate(-45deg)" : "translateY(6px)",
            }}
          />
        </button>
      </nav>

      {/* ── Mobile menu overlay ── */}
      <div
        ref={menuRef}
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        className="fixed inset-0 z-40 flex flex-col md:hidden"
        style={{
          background: "rgba(13,10,7,0.98)",
          backdropFilter: "blur(16px)",
          opacity: open ? 1 : 0,
          pointerEvents: open ? "auto" : "none",
          transition: "opacity 0.4s var(--motion-ease-out)",
        }}
      >
        {/* Links — centered, display font */}
        <div className="flex flex-col justify-center items-center gap-6 flex-1" style={{ paddingTop: "5rem" }}>
          {NAV_LINKS.map(({ label, href }, i) => (
            <a
              key={label}
              href={href}
              onClick={() => setOpen(false)}
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.8rem, 12vw, 4.5rem)",
                color: "var(--craft-cream)",
                letterSpacing: "var(--track-display)",
                lineHeight: 1,
                opacity: open ? 1 : 0,
                transform: open ? "translateY(0)" : "translateY(16px)",
                transition: "opacity 0.4s var(--motion-ease-out), transform 0.4s var(--motion-ease-out)",
                transitionDelay: open ? `${i * 0.07 + 0.1}s` : "0s",
              }}
            >
              {label.toUpperCase()}
            </a>
          ))}

          {/* CTA */}
          <a
            href="#find-us"
            onClick={() => setOpen(false)}
            className="craft-cta mt-6"
            style={{
              opacity: open ? 1 : 0,
              transform: open ? "translateY(0)" : "translateY(16px)",
              transition: "opacity 0.4s var(--motion-ease-out), transform 0.4s var(--motion-ease-out)",
              transitionDelay: open ? "0.31s" : "0s",
            }}
          >
            Find Us
          </a>
        </div>

        {/* Bottom meta */}
        <p
          className="pb-10 text-center text-[10px] tracking-[0.45em] uppercase"
          style={{
            color: "var(--craft-muted)",
            opacity: open ? 0.45 : 0,
            transition: "opacity 0.4s ease",
            transitionDelay: open ? "0.38s" : "0s",
          }}
        >
          518 · Troy, NY · Collar City
        </p>
      </div>
    </>
  );
}
