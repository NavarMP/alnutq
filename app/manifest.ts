import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Al Nutq - Islamic Community",
    short_name: "Al Nutq",
    description: "Al Nutq is an Islamic community focused on traditional Islamic teachings.",
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#415a80",
    icons: [
      {
        src: "/icons/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/icons/icon-384x384.png",
        sizes: "384x384",
        type: "image/png",
      },
      {
        src: "/icons/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  }
}

