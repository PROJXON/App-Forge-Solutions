/** @type {import('next').NextConfig} */
const isGhPages = process.env.DEPLOY_TARGET === 'ghpages';
const repoBasePath = '/App-Forge-Solutions';

const nextConfig = {
  reactStrictMode: true,
  output: isGhPages ? 'export' : 'standalone',
  images: { unoptimized: true },
  trailingSlash: true,
  basePath: isGhPages ? repoBasePath : undefined,
  assetPrefix: isGhPages ? `${repoBasePath}/` : undefined,
};

module.exports = nextConfig;