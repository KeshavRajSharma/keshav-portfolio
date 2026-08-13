import { ImageResponse } from "next/og";

export const alt =
  "Keshav Raj Sharma — Full-Stack Developer and AI/Data Science Enthusiast";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(
    <div
      style={{
        position: "relative",
        display: "flex",
        width: "100%",
        height: "100%",
        overflow: "hidden",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "72px 82px",
        color: "#f8fafc",
        background:
          "linear-gradient(135deg, #090d14 0%, #111827 52%, #15152d 100%)",
        fontFamily: "Arial, Helvetica, sans-serif",
      }}
    >
      <div
        style={{
          position: "absolute",
          width: "420px",
          height: "420px",
          right: "-100px",
          top: "-130px",
          borderRadius: "999px",
          background: "rgba(99, 102, 241, 0.22)",
        }}
      />

      <div
        style={{
          position: "absolute",
          width: "360px",
          height: "360px",
          left: "-140px",
          bottom: "-180px",
          borderRadius: "999px",
          background: "rgba(34, 211, 238, 0.12)",
        }}
      />

      <div
        style={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          fontSize: 25,
          fontWeight: 700,
          letterSpacing: "-0.5px",
        }}
      >
        Keshav Raj Sharma
        <span
          style={{
            color: "#818cf8",
          }}
        >
          .
        </span>
      </div>

      <div
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          maxWidth: "940px",
        }}
      >
        <div
          style={{
            display: "flex",
            marginBottom: "18px",
            color: "#818cf8",
            fontSize: 23,
            fontWeight: 600,
          }}
        >
          Computer Engineering Student
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 68,
            lineHeight: 1.05,
            fontWeight: 760,
            letterSpacing: "-3px",
          }}
        >
          Full-Stack Developer
        </div>

        <div
          style={{
            display: "flex",
            marginTop: "9px",
            fontSize: 46,
            lineHeight: 1.12,
            fontWeight: 650,
            letterSpacing: "-1.8px",
            color: "#c4b5fd",
          }}
        >
          AI &amp; Data Science Enthusiast
        </div>
      </div>

      <div
        style={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          color: "#94a3b8",
          fontSize: 21,
        }}
      >
        Full Stack &nbsp;•&nbsp; AI / ML &nbsp;•&nbsp; Data Science
      </div>
    </div>,
    {
      ...size,
    },
  );
}
