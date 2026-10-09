import { ImageResponse } from "next/og";
import { NEIGHBORHOODS } from "@/content/neighborhoods";

export const runtime = "edge";
export const alt = "Covenant Homes Philly — Neighborhood";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateImageMetadata() {
  return NEIGHBORHOODS.map((n) => ({
    id: n.slug,
    alt: `We buy houses in ${n.name}, Philadelphia`,
    size,
    contentType,
  }));
}

export default async function OG({ params }: { params: { slug: string } }) {
  const n = NEIGHBORHOODS.find((x) => x.slug === params.slug);
  if (!n) {
    return new ImageResponse(<div style={{ background: "#0A0A0A" }} />, size);
  }

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#0A0A0A",
          backgroundImage:
            "linear-gradient(135deg, #0A0A0A 0%, #1a1a1a 50%, #0A0A0A 100%)",
          padding: "60px 80px",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 4,
            backgroundColor: "#B8A055",
          }}
        />
        <div
          style={{
            fontSize: 18,
            color: "#B8A055",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            fontFamily: "monospace",
            marginBottom: 20,
          }}
        >
          Neighborhood · {n.zipCodes.join(" · ")}
        </div>
        <div
          style={{
            fontSize: 72,
            color: "#FFFFFF",
            fontFamily: "serif",
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
            flex: 1,
            display: "flex",
            alignItems: "center",
            maxWidth: 1040,
          }}
        >
          We buy houses in {n.name}, Philadelphia.
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            borderTop: "1px solid rgba(184,160,85,0.3)",
            paddingTop: 20,
            fontSize: 20,
            color: "rgba(255,255,255,0.6)",
            fontFamily: "monospace",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
          }}
        >
          <span>Covenant Homes Philly</span>
          <span style={{ color: "#B8A055" }}>
            {n.offerContext.arvRange}
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
