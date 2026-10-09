import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Covenant Homes Philly — Honest Philadelphia Cash Home Buyer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0A0A0A",
          backgroundImage:
            "linear-gradient(135deg, #0A0A0A 0%, #1a1a1a 50%, #0A0A0A 100%)",
          padding: "60px 80px",
          position: "relative",
        }}
      >
        {/* Gold accent rule top */}
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
        {/* Top dateline */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 18,
            color: "#B8A055",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            fontFamily: "monospace",
          }}
        >
          <span>Philadelphia, PA · Est. 2021</span>
          <span>Vol. V</span>
        </div>

        {/* Main headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: 24,
              color: "#B8A055",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              fontFamily: "monospace",
            }}
          >
            The Honest Philly Cash Home Buyer
          </div>
          <div
            style={{
              fontSize: 84,
              color: "#FFFFFF",
              fontFamily: "serif",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              maxWidth: 960,
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            Covenant Homes Philly.
          </div>
          <div
            style={{
              fontSize: 28,
              color: "rgba(255,255,255,0.8)",
              fontFamily: "serif",
              fontStyle: "italic",
              maxWidth: 900,
              lineHeight: 1.4,
            }}
          >
            Fair cash offers in 24 hours. 55+ Philly houses closed.
          </div>
        </div>

        {/* Bottom signature */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            borderTop: "1px solid rgba(184,160,85,0.3)",
            paddingTop: 24,
          }}
        >
          <div
            style={{
              fontSize: 20,
              color: "rgba(255,255,255,0.6)",
              fontFamily: "monospace",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            covenanthomesphilly.com
          </div>
          <div
            style={{
              fontSize: 20,
              color: "#B8A055",
              fontFamily: "serif",
              fontStyle: "italic",
            }}
          >
            — Watson Saintsulne
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
