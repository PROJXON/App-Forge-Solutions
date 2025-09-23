// next.config.js
/** @type {import('next').NextConfig} */
const deployTarget = process.env.DEPLOY_TARGET;
const isGhPages = deployTarget === 'ghpages';
const isSubpath = deployTarget === 'cloudfront-subpath';
const repoBasePath = '/App-Forge-Solutions';
const subpath = '/business-app';

module.exports = {
  reactStrictMode: true,
  output: isGhPages ? 'export' : 'standalone',
  images: { unoptimized: true },
  basePath: isGhPages ? repoBasePath : (isSubpath ? subpath : undefined),
  assetPrefix: isGhPages ? `${repoBasePath}/` : (isSubpath ? `${subpath}/` : undefined),
};