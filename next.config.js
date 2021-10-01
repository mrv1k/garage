// @ts-check
const path = require("path");

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  experimental: { esmExternals: true },
  reactStrictMode: true,
};

const withNextPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");

withNextPWA({
  pwa: {
    dest: "public",
    runtimeCaching,
  },
});

const blogPath = path.resolve("./blog/**/*.mdx");

const withRemoteRefresh = require("next-remote-refresh")({
  paths: [blogPath],
  ignored: "**/*.json",
});

module.exports = withNextPWA(withRemoteRefresh(nextConfig));

module.exports = nextConfig;
