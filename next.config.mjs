// next.config.mjs
/** @type {import('next').NextConfig} */

const nextConfig = {
  async redirects() {
    return [
      { source: "/reviews", destination: "/2024/reviews", permanent: true },
      { source: "/program", destination: "/2024/press", permanent: true },
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
    ];
  },
};

export default nextConfig;
