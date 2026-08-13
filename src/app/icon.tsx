import { ImageResponse } from "next/og";

export const size = {
  width: 64,
  height: 64,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        color: "#ffffff",
        background:
          "linear-gradient(135deg, #3b82f6 0%, #7c3aed 55%, #22d3ee 100%)",
        borderRadius: "16px",
        fontFamily: "Arial, Helvetica, sans-serif",
        fontSize: 36,
        fontWeight: 800,
        letterSpacing: "-2px",
      }}
    >
      K
    </div>,
    {
      ...size,
    },
  );
}
