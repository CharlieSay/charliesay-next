const withPlugins = require("next-compose-plugins");

const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ["js", "jsx", "ts", "tsx", "mdx", "md"],
};

module.exports = withPlugins([], nextConfig);
