import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const dynamic = "force-static";
export const revalidate = false;

// 96x96 is a multiple of 48 (48 * 2), fully compliant with Google Favicon specs
export const size = {
  width: 96,
  height: 96,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#090d16",
          borderRadius: "20px",
          border: "3px solid #38bdf8",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        <span
          style={{
            fontSize: "36px",
            fontWeight: 900,
            color: "#ffffff",
            letterSpacing: "-1px",
          }}
        >
          MHA
        </span>
      </div>
    ),
    {
      ...size,
    },
  );
}
