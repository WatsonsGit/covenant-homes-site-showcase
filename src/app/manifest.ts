import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Covenant Homes Philly",
    short_name: "Covenant",
    description: "Honest Philadelphia cash home buyer.",
    start_url: "/",
    display: "standalone",
    background_color: "#FFFFFF",
    theme_color: "#0A0A0A",
    icons: [
      { src: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { src: "/favicon.png", sizes: "64x64", type: "image/png" },
    ],
  };
}
