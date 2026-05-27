import { Logo } from "@/components/craft/logo";

export function Footer() {
  return (
    <footer
      style={{
        background: "var(--craft-black)",
        borderTop: "1px solid var(--craft-border)",
      }}
    >
      {/* Top orange rule */}
      <div
        className="h-px w-full"
        style={{
          background:
            "linear-gradient(to right, transparent, var(--craft-orange) 20%, var(--craft-orange) 80%, transparent)",
          opacity: 0.4,
        }}
        aria-hidden="true"
      />

      {/* Main footer */}
      <div
        className="py-16 grid grid-cols-1 md:grid-cols-3 gap-12 items-start"
        style={{ paddingLeft: "var(--px)", paddingRight: "var(--px)" }}
      >
        {/* Brand */}
        <div>
          <Logo
            className="h-16 w-auto mb-4"
            color="var(--craft-cream)"
            aria-hidden={true}
          />
          <p className="text-craft-muted text-xs tracking-[0.35em] uppercase">
            Independent Brewery
          </p>
        </div>

        {/* Center — tagline (hidden until needed) */}
        <div className="hidden flex-col gap-2">
          <div className="flex items-center gap-3 mb-1">
            <div className="w-5 h-px" style={{ background: "var(--craft-orange)" }} aria-hidden="true" />
            <p className="text-[11px] tracking-[0.4em] uppercase" style={{ color: "var(--craft-muted)" }}>
              THINK NY
            </p>
          </div>
          <p
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
              color: "var(--craft-orange)",
              letterSpacing: "var(--track-display)",
              lineHeight: 0.9,
            }}
          >
            DRINK NY
          </p>
        </div>

        {/* Info */}
        <div className="flex flex-col gap-2 md:col-start-3 md:text-right">
          <p className="text-craft-cream text-sm">200 Broadway, Troy, NY 12180</p>
          <p className="text-craft-muted text-xs tracking-widest uppercase mb-2">
            Tasting Room
          </p>
          <p className="text-craft-muted text-xs tracking-[0.25em] uppercase">Mon–Thu · 4–11pm</p>
          <p className="text-craft-muted text-xs tracking-[0.25em] uppercase">Fri–Sat · 4pm–12am</p>
          <p className="text-craft-muted text-xs tracking-[0.25em] uppercase">Sun · 4–10pm</p>
          <div className="flex gap-4 mt-4 md:justify-end">
            <a
              href="mailto:troy@518craft.com"
              className="text-xs tracking-[0.25em] uppercase text-craft-muted hover:text-craft-cream transition-colors duration-200"
            >
              Email
            </a>
            <a
              href="https://instagram.com/518craft"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram (opens in new tab)"
              className="text-xs tracking-[0.25em] uppercase text-craft-muted hover:text-craft-cream transition-colors duration-200"
            >
              Instagram
            </a>
            <a
              href="https://facebook.com/518Craft"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook (opens in new tab)"
              className="text-xs tracking-[0.25em] uppercase text-craft-muted hover:text-craft-cream transition-colors duration-200"
            >
              Facebook
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-3"
        style={{
          paddingLeft: "var(--px)",
          paddingRight: "var(--px)",
          borderTop: "1px solid var(--craft-border)",
        }}
      >
        <p className="text-craft-muted text-xs tracking-[0.4em] uppercase">
          Est. 518 · Collar City · Troy, NY
        </p>
        <p className="text-craft-muted text-xs tracking-[0.4em] uppercase">
          © {new Date().getFullYear()} 518 Craft Brewing. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
