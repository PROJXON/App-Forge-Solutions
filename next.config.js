/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/App-Forge-Solutions',
  assetPrefix: '/App-Forge-Solutions/',
};

module.exports = nextConfig;
