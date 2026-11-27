import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

/** Built once at deploy time (the site is a static export). */
export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.name,
    short_name: "Snug",
    description: site.description,
    start_url: "/",
    display: "standalone",
    background_color: "#3b1536",
    theme_color: "#3b1536",
    icons: [
      { src: "/apple-icon", sizes: "180x180", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
