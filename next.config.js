/* eslint-env node */

// https://gepolter.github.io/nextBbApplication/
const isProd = process.env.NODE_ENV === 'production'
const nextConfig = {
  assetPrefix: isProd ? '/nextBbApplication/' : '',
  webpack: config => {
    const oneOfRule = config.module.rules.find(rule => rule.oneOf);

    // Next 12 has multiple TS loaders, and we need to update all of them.
    const tsRules = oneOfRule.oneOf.filter(rule => rule.test && rule.test.toString().includes('tsx|ts'));

    tsRules.forEach(rule => {
      // eslint-disable-next-line no-param-reassign
      rule.include = undefined;
    });

    return config;
  },
  compress: true,
  generateEtags: true,
  pageExtensions: ['tsx', 'mdx', 'ts'],
  poweredByHeader: false,
  productionBrowserSourceMaps: false,
  svgo: {
    multipass: true,
    plugins: ['removeDimensions'],
  },
  strictMode: true,
  swcMinify: true,
  trailingSlash: false,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;

// next.config.js


module.exports = {
  
  images: {
    unoptimized: true,
  },
}
