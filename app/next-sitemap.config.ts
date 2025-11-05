// next-sitemap.config.js
/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: "https://www.dickensagain.com",
  generateRobotsTxt: true,
  trailingSlash: true, // ensures "/" form in sitemap
  transform: async (config, url) => {
    // avoid adding the root twice; but do include "/"
    return {
      loc: url,
      changefreq: "weekly",
      priority: url === "/" ? 1.0 : 0.7,
    };
  },
};
