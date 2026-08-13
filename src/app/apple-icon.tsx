import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};

export const contentType = "image/png";

export default function AppleIcon() {
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
        borderRadius: "38px",
        fontFamily: "Arial, Helvetica, sans-serif",
        fontSize: 102,
        fontWeight: 800,
        letterSpacing: "-5px",
      }}
    >
      K
    </div>,
    {
      ...size,
    },
  );
}
