import { ImageResponse } from "next/og";
import { listDocs, getDoc } from "@/lib/mdx";

export const runtime = "nodejs";
export const alt = "Covenant Homes Philly — Blog";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

interface BlogFrontmatter {
  title: string;
  datePublished: string;
  category?: string;
}

export function generateImageMetadata() {
  return listDocs<BlogFrontmatter>("blog").map((d) => ({
    id: d.slug,
    alt: d.frontmatter.title,
    size,
    contentType,
  }));
}

export default async function OG({ params }: { params: { slug: string } }) {
  const doc = getDoc<BlogFrontmatter>("blog", params.slug);
  if (!doc) {
    return new ImageResponse(<div style={{ background: "#0A0A0A" }} />, size);
  }

  const dateStr = new Date(doc.frontmatter.datePublished).toLocaleDateString(
    "en-US",
    { year: "numeric", month: "long", day: "numeric" }
  );

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#FAF7EE",
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
            display: "flex",
            justifyContent: "space-between",
            fontSize: 18,
            color: "#7B6A30",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            fontFamily: "monospace",
            marginBottom: 30,
          }}
        >
          <span>{doc.frontmatter.category ?? "Philly Seller Guide"}</span>
          <span>{dateStr}</span>
        </div>
        <div
          style={{
            fontSize: 64,
            color: "#0A0A0A",
            fontFamily: "serif",
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            flex: 1,
            display: "flex",
            alignItems: "center",
            maxWidth: 1040,
          }}
        >
          {doc.frontmatter.title}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid rgba(10,10,10,0.15)",
            paddingTop: 20,
            fontSize: 20,
            color: "#3A3936",
            fontFamily: "serif",
            fontStyle: "italic",
          }}
        >
          <span>covenanthomesphilly.com</span>
          <span>— Watson Saintsulne</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
