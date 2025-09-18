/** @type {import('next').NextConfig} */
const deployTarget = process.env.DEPLOY_TARGET;

let nextConfig = {
  reactStrictMode: true,
  output: deployTarget === 'ghpages' ? 'export' : 'standalone',
  images: { unoptimized: true },
  trailingSlash: true,
};

// Handle GitHub Pages build
if (deployTarget === 'ghpages') {
  const repoBasePath = '/App-Forge-Solutions';
  nextConfig.basePath = repoBasePath;
  nextConfig.assetPrefix = `${repoBasePath}/`;
}

// Handle Amplify build under /business-portfolio
if (deployTarget === 'amplify-business') {
  const subPath = '/business-portfolio';
  nextConfig.basePath = subPath;
  nextConfig.assetPrefix = `${subPath}/`;
}

module.exports = nextConfig;