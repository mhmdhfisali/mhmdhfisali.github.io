import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const dynamic = "force-static";
export const revalidate = false;

export const alt = "Muhamad Hafis Ali | Portofolio";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        background: "#12141a",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "space-between",
        padding: "80px",
        fontFamily: "sans-serif",
        position: "relative",
      }}
    >
      {/* Glow Ambient Accent */}
      <div
        style={{
          position: "absolute",
          top: "-150px",
          right: "-100px",
          width: "500px",
          height: "500px",
          background:
            "radial-gradient(circle, rgba(59,130,246,0.3) 0%, rgba(6,182,212,0.1) 50%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      {/* Top Badge */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          background: "rgba(255,255,255,0.06)",
          padding: "8px 20px",
          borderRadius: "9999px",
          border: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        <div
          style={{
            width: "10px",
            height: "10px",
            borderRadius: "9999px",
            background: "#3b82f6",
          }}
        />
        <span
          style={{
            color: "#93c5fd",
            fontSize: "18px",
            fontWeight: 600,
            letterSpacing: "1px",
          }}
        >
          PORTOFOLIO REKAYASA & SISTEM
        </span>
      </div>

      {/* Central Info */}
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <h1
          style={{
            fontSize: "64px",
            fontWeight: 900,
            color: "#ffffff",
            margin: 0,
            letterSpacing: "-1.5px",
          }}
        >
          Muhamad Hafis Ali
        </h1>
        <p
          style={{
            fontSize: "28px",
            color: "#38bdf8",
            margin: 0,
            fontWeight: 700,
          }}
        >
          Software, AI &amp; Mobile Developer | System Administrator
        </p>
      </div>

      {/* Bottom Stack Badges */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "16px",
          color: "#94a3b8",
          fontSize: "18px",
        }}
      >
        <span>Next.js</span>
        <span>•</span>
        <span>Tailwind CSS</span>
        <span>•</span>
        <span>Sanity CMS</span>
        <span>•</span>
        <span>Linux &amp; Cloud</span>
      </div>
    </div>,
    {
      ...size,
    },
  );
}
