import type { NextConfig } from "next";

/** Project Pages URL: https://twobitEDD.github.io/teaching-children/ */
const repo = "teaching-children";
const isGithubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  ...(isGithubPages
    ? {
        basePath: `/${repo}`,
        assetPrefix: `/${repo}/`,
      }
    : {}),
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
