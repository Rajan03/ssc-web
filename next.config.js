/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.sanity.io', 'images.unsplash.com', 'img.freepik.com'],
  },
};

module.exports = nextConfig;
