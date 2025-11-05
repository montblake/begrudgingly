// next.config.mjs
/** @type {import('next').NextConfig} */

const nextConfig = {
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
      // // non-www to www (catch-all for all other paths)
      // {
      //   source: "/:path*",
      //   has: [{ type: "host", value: "dickensagain.com" }],
      //   destination: "https://www.dickensagain.com/:path*",
      //   permanent: true,
      // },
    ];
  },
  trailingSlash: true,
};

export default nextConfig;
