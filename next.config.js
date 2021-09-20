// @ts-check
const path = require("path");

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  experimental: { esmExternals: true },
  reactStrictMode: true,
};

const blogPath = path.resolve("./blog/**/*.mdx");

const withRemoteRefresh = require("next-remote-refresh")({
  paths: [blogPath],
  ignored: "**/*.json",
});

module.exports = withRemoteRefresh(nextConfig);

module.exports = nextConfig;
