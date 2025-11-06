// next.config.mjs
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
      {
        source: "/reviews",
        destination: "https://www.dickensagain.com/2024/reviews",
        permanent: true,
      },
      {
        source: "/program",
        destination: "https://www.dickensagain.com/2024/program",
        permanent: true,
      },
      {
        source: "/photos_publicity",
        destination: "https://www.dickensagain.com/2024/photos-publicity",
        permanent: true,
      },
      {
        source: "/photos_performance",
        destination: "https://www.dickensagain.com/2024/photos-performance",
        permanent: true,
      },
      // non-www to www (catch-all for all other paths)
      {
        source: "/:path*",
        has: [{ type: "host", value: "dickensagain.com" }],
        destination: "https://www.dickensagain.com/:path*",
        permanent: true,
      },
    ];
  },
  trailingSlash: true,
};

export default nextConfig;
