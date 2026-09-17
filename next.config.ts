import type { NextConfig } from "next";

/**
 * Static export: no server runtime at all, which is what makes this free to
 * host on Netlify's static tier. The one thing this page used to do
 * server-side (the contact form's POST) now goes to decrakerubo.com's
 * /api/contact directly, see app/page.tsx.
 */
const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  turbopack: { root: __dirname },
};

export default nextConfig;
