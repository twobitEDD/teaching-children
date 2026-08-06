import type { NextConfig } from "next";

/** Project Pages URL: https://twobitEDD.github.io/teaching-children/ */
const repo = "teaching-children";
const isGithubPages = process.env.GITHUB_PAGES === "true";

const basePath = isGithubPages ? `/${repo}` : "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // next/image with unoptimized does not always prepend basePath — expose for assetPath().
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  ...(isGithubPages
    ? {
        basePath,
        assetPrefix: `${basePath}/`,
      }
    : {}),
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
