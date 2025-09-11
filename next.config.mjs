/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["placehold.co"], // ✅ allow this domain
  },
  output: 'export'
};

export default nextConfig;
