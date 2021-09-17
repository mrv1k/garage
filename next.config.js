// @ts-check
const path = require("path");

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  reactStrictMode: true,
};

const blogPath = path.resolve("./blog/**/*.mdx");

const withRemoteRefresh = require("next-remote-refresh")({
  paths: [blogPath],
  ignored: "**/*.json",
});

module.exports = withRemoteRefresh(nextConfig);
