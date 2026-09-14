import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const dynamic = "force-static";
export const revalidate = false;

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        fontSize: 18,
        background: "#181a20",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#38bdf8",
        borderRadius: "8px",
        border: "1px solid rgba(255,255,255,0.15)",
        fontWeight: 800,
        fontFamily: "sans-serif",
      }}
    >
      H
    </div>,
    {
      ...size,
    },
  );
}
