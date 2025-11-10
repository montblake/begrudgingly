// next.config.mjs

/** @type {import('next').NextConfig} */
import bundleAnalyzer from "@next/bundle-analyzer";

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig = {
  // Tell Next to target modern browsers only (no legacy polyfills/transforms)
  experimental: {
    esmExternals: true, // prefer ESM builds of deps where available
    optimizePackageImports: ["lucide-react"],
  },

  // Optimize CSS loading
  compiler: {
    // Remove console logs in production (optional, but helps with bundle size)
    removeConsole:
      process.env.NODE_ENV === "production"
        ? {
            exclude: ["error", "warn"],
          }
        : false,
  },

  images: {
    formats: ["image/avif"],
    // deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    // imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    qualities: [50, 60, 75],
  },

  async redirects() {
    return [
      // Legacy → current (land on final non-slash targets)
      { source: "/reviews", destination: "/2024/reviews", permanent: true },
      { source: "/reviews/", destination: "/2024/reviews", permanent: true },

      { source: "/program", destination: "/2024/program", permanent: true },
      { source: "/program/", destination: "/2024/program", permanent: true },

      {
        source: "/photos_publicity",
        destination: "/2024/photos-publicity",
        permanent: true,
      },
      {
        source: "/photos_publicity/",
        destination: "/2024/photos-publicity",
        permanent: true,
      },

      {
        source: "/photos_performance",
        destination: "/2024/photos-performance",
        permanent: true,
      },
      {
        source: "/photos_performance/",
        destination: "/2024/photos-performance",
        permanent: true,
      },

      // Apex → www (single hop)
      {
        source: "/:path*",
        has: [{ type: "host", value: "dickensagain.com" }],
        destination: "https://www.dickensagain.com/:path*",
        permanent: true,
      },
    ];
  },

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
    ];
  },
};

export default withBundleAnalyzer(nextConfig);
