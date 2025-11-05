/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.dickensagain.com",
  generateRobotsTxt: true,
  sitemapSize: 7000,
  trailingSlash: true,

  // Optional: exclude certain pages if needed
  // exclude: ['/404', '/500'],

  // Optional: add custom transform to tweak per-page metadata
  //   transform: async (config, path) => {
  //     return {
  //       loc: path, // full URL
  //       changefreq: path === '/' ? 'weekly' : 'monthly',
  //       priority: path === '/' ? 1.0 : 0.7,
  //       lastmod: new Date().toISOString(),
  //     };
  //   },
};
