/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export served as plain assets (Cloudflare Workers).
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
