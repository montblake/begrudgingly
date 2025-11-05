import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.dickensagain.com/",
      lastModified: new Date(),
      changeFrequency: "always",
      priority: 1,
    },
    {
      url: "https://www.dickensagain.com/history",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: "https://www.dickensagain.com/2024/reviews",
      lastModified: new Date(),
      changeFrequency: "never",
      priority: 0.1,
    },
    {
      url: "https://www.dickensagain.com/2024/photos-publicity",
      lastModified: new Date(),
      changeFrequency: "never",
      priority: 0.1,
    },
    {
      url: "https://www.dickensagain.com/2024/photos-performance",
      lastModified: new Date(),
      changeFrequency: "never",
      priority: 0.1,
    },
    {
      url: "https://www.dickensagain.com/2024/program",
      lastModified: new Date(),
      changeFrequency: "never",
      priority: 0.1,
    },
    {
      url: "https://www.dickensagain.com/creator",
      changeFrequency: "yearly",
      priority: 0.1,
    },
    {
      url: "https://www.dickensagain.com/contact",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.1,
    },
  ];
}
