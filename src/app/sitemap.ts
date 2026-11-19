import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...["aviso-legal", "privacidad", "cookies"].map(path => ({url: `https://aleprofit.com/${path}`, lastModified: new Date("2026-11-19"), priority: 0.3})),
    {
      url:  "https://aleprofit.com",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
