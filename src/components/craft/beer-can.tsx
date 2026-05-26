import Image from "next/image";

interface BeerCanProps {
  image: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
}

export function BeerCan({ image, alt, className = "", style }: BeerCanProps) {
  return (
    <div
      className={`relative select-none ${className}`}
      style={{ width: "100%", aspectRatio: "1 / 2.08", ...style }}
      role="img"
      aria-label={alt}
    >
      {/* ── Pull tab ─────────────────────────────────────── */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "-1.8%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "9%",
          height: "3.8%",
          background: "linear-gradient(135deg, #C8C8C8 0%, #888 100%)",
          borderRadius: "3px 3px 2px 2px",
          boxShadow: "0 2px 4px rgba(0,0,0,0.7)",
          zIndex: 10,
        }}
      />

      {/* ── Top lid (ellipse / rim) ──────────────────────── */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "0",
          left: "12%",
          right: "12%",
          height: "5%",
          background: "#9A9A9A",
          borderRadius: "50% 50% 30% 30% / 100% 100% 40% 40%",
          overflow: "hidden",
          zIndex: 5,
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to right, rgba(0,0,0,0.55) 0%, rgba(255,255,255,0.3) 30%, rgba(255,255,255,0.2) 55%, rgba(0,0,0,0.45) 100%)",
          }}
        />
      </div>

      {/* ── Neck / shoulder taper ────────────────────────── */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "3.5%",
          left: "4%",
          right: "4%",
          height: "8.5%",
          background: "linear-gradient(to bottom, #A8A8A8 0%, #C4C4C4 50%, #B0B0B0 100%)",
          clipPath: "polygon(6% 100%, 0% 0%, 100% 0%, 94% 100%)",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to right, rgba(0,0,0,0.5) 0%, rgba(255,255,255,0.2) 25%, rgba(255,255,255,0.12) 55%, rgba(0,0,0,0.4) 100%)",
          }}
        />
      </div>

      {/* ── Can body (label area) ────────────────────────── */}
      <div
        style={{
          position: "absolute",
          top: "11%",
          bottom: "4.5%",
          left: "0",
          right: "0",
          borderRadius: "2px",
          overflow: "hidden",
        }}
      >
        {/* Label image */}
        <Image
          src={image}
          alt={alt}
          fill
          className="object-cover object-center"
          sizes="(max-width: 768px) 50vw, 25vw"
        />

        {/* Left shadow — cylinder edge */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to right, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.18) 14%, transparent 26%)",
          }}
        />

        {/* Specular highlight — bright stripe */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: "17%",
            width: "4%",
            background: "rgba(255,255,255,0.28)",
            filter: "blur(2px)",
          }}
        />

        {/* Secondary soft highlight */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: "12%",
            width: "12%",
            background:
              "linear-gradient(to right, transparent, rgba(255,255,255,0.09), transparent)",
          }}
        />

        {/* Right shadow — cylinder edge */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to left, rgba(0,0,0,0.68) 0%, rgba(0,0,0,0.16) 14%, transparent 26%)",
          }}
        />

        {/* Top darkening (just below neck) */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: "0 0 auto",
            height: "7%",
            background: "linear-gradient(to bottom, rgba(0,0,0,0.38), transparent)",
          }}
        />

        {/* Bottom darkening (above base) */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: "auto 0 0",
            height: "7%",
            background: "linear-gradient(to top, rgba(0,0,0,0.42), transparent)",
          }}
        />
      </div>

      {/* ── Bottom dome ──────────────────────────────────── */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: "0",
          left: "4%",
          right: "4%",
          height: "5.5%",
          background: "linear-gradient(to bottom, #B0B0B0, #707070)",
          borderRadius: "0 0 50% 50% / 0 0 100% 100%",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to right, rgba(0,0,0,0.5) 0%, rgba(255,255,255,0.15) 30%, rgba(255,255,255,0.1) 60%, rgba(0,0,0,0.4) 100%)",
          }}
        />
      </div>

      {/* ── Ground shadow ────────────────────────────────── */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: "-12px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "55%",
          height: "18px",
          background:
            "radial-gradient(ellipse, rgba(0,0,0,0.55) 0%, transparent 72%)",
          filter: "blur(5px)",
        }}
      />
    </div>
  );
}
