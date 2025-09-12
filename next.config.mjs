/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["placehold.co"], // ✅ allow this domain
  },
  output: 'export',
  images: {
    unoptimized: true, // disable image optimizer
  },
  assetPrefix: 'https://udana.dev',
};

export default nextConfig;
