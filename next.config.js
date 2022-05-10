const withPlugins = require("next-compose-plugins");

const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ["js", "jsx", "ts", "tsx", "mdx", "md"],
  images: {
    domains: ["s2.googleusercontent.com"],
  },
};

module.exports = withPlugins([], nextConfig);
