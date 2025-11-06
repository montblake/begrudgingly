/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
  },

  async redirects() {
    return [
      // Use relative destinations to avoid extra origin parsing
      { source: "/reviews", destination: "/2024/reviews", permanent: true },
      { source: "/program", destination: "/2024/program", permanent: true },
      {
        source: "/photos_publicity",
        destination: "/2024/photos-publicity",
        permanent: true,
      },
      {
        source: "/photos_performance",
        destination: "/2024/photos-performance",
        permanent: true,
      },
      // non-www -> www (single hop)
      {
        source: "/:path*",
        has: [{ type: "host", value: "dickensagain.com" }],
        destination: "https://www.dickensagain.com/:path*",
        permanent: true,
      },
    ];
  },

  // Avoid extra 308s on rewritten destinations
  trailingSlash: false,

  async headers() {
    return [
      // Immutable cache for Next build artifacts
      {
        source: "/_next/static/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      // Optional: if you content-hash public images (e.g., /images/hero.abcd123.webp)
      {
        source: "/images/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
