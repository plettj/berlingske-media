import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.berlingskemedia.org/",
      lastModified: "2024-11-06",
      changeFrequency: "daily",
      priority: 0.5,
    },
  ];
}
