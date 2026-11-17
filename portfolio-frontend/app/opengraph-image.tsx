import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const dynamic = "force-static";
export const revalidate = false;

export const alt = "Muhamad Hafis Ali | Fullstack Developer & Mobile Developer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0a0d14",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          position: "relative",
          padding: "40px",
        }}
      >
        {/* Outer Tech Frame (visible on 16:9 full previews) */}
        <div
          style={{
            position: "absolute",
            top: "24px",
            left: "24px",
            right: "24px",
            bottom: "24px",
            border: "1px solid rgba(56, 189, 248, 0.15)",
            borderRadius: "16px",
            display: "flex",
          }}
        />

        {/* Ambient Center Glow */}
        <div
          style={{
            position: "absolute",
            width: "550px",
            height: "550px",
            borderRadius: "9999px",
            background:
              "radial-gradient(circle, rgba(56, 189, 248, 0.18) 0%, rgba(99, 102, 241, 0.1) 45%, transparent 70%)",
            top: "40px",
            left: "325px",
          }}
        />

        {/* Safe-Zone Card Container (strictly <= 580px wide for 1:1 WhatsApp crop) */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            maxWidth: "580px",
            width: "100%",
          }}
        >
          {/* Avatar / Monogram Cyber Badge */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "76px",
              height: "76px",
              borderRadius: "9999px",
              background: "linear-gradient(135deg, #0284c7 0%, #2563eb 100%)",
              border: "3px solid #38bdf8",
              marginBottom: "16px",
            }}
          >
            <span
              style={{
                fontSize: "26px",
                fontWeight: 900,
                color: "#ffffff",
                letterSpacing: "1px",
              }}
            >
              MHA
            </span>
          </div>

          {/* Top Pill: Status & Domain */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              background: "rgba(15, 23, 42, 0.75)",
              border: "1px solid rgba(56, 189, 248, 0.3)",
              padding: "6px 16px",
              borderRadius: "9999px",
              marginBottom: "16px",
            }}
          >
            <div
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "9999px",
                background: "#10b981",
              }}
            />
            <span
              style={{
                color: "#94a3b8",
                fontSize: "13px",
                fontWeight: 700,
                letterSpacing: "1.5px",
              }}
            >
              PORTFOLIO REKAYASA &amp; SISTEM
            </span>
          </div>

          {/* Name Header */}
          <h1
            style={{
              fontSize: "48px",
              fontWeight: 900,
              color: "#ffffff",
              margin: "0 0 10px 0",
              letterSpacing: "-1px",
              lineHeight: 1.15,
            }}
          >
            Muhamad Hafis Ali
          </h1>

          {/* Role Badges */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              marginBottom: "12px",
            }}
          >
            <span
              style={{
                fontSize: "22px",
                fontWeight: 800,
                color: "#38bdf8",
              }}
            >
              Fullstack Developer
            </span>
            <span style={{ fontSize: "18px", color: "#64748b" }}>•</span>
            <span
              style={{
                fontSize: "22px",
                fontWeight: 800,
                color: "#818cf8",
              }}
            >
              Mobile Developer
            </span>
          </div>

          {/* Enterprise & Projects Affiliation */}
          <p
            style={{
              fontSize: "14px",
              color: "#94a3b8",
              margin: "0 0 22px 0",
              fontWeight: 500,
            }}
          >
            PT Sinar Meadow International Indonesia • absolutestore.id
          </p>

          {/* Tech Stack Pills */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
            }}
          >
            {["Flutter", "Next.js", "Laravel", "Docker", "Linux & Cloud"].map(
              (tech) => (
                <div
                  key={tech}
                  style={{
                    background: "rgba(255, 255, 255, 0.05)",
                    border: "1px solid rgba(255, 255, 255, 0.12)",
                    borderRadius: "6px",
                    padding: "4px 12px",
                    color: "#cbd5e1",
                    fontSize: "13px",
                    fontWeight: 600,
                  }}
                >
                  {tech}
                </div>
              ),
            )}
          </div>
        </div>

        {/* Bottom Subtle Domain Watermark */}
        <div
          style={{
            position: "absolute",
            bottom: "28px",
            color: "#475569",
            fontSize: "13px",
            fontWeight: 600,
            letterSpacing: "1px",
          }}
        >
          mhmdhfisali.github.io
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
