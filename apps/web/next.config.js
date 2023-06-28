module.exports = {
  reactStrictMode: true,
  transpilePackages: ["@modularcloud/design-system"],
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['nautchain.xyz', 'mc-nft.s3.us-west-2.amazonaws.com', 'ucarecdn.com'],
  },

  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    if (!isServer) {
      // Fix "Can't resolve 'https'" error by providing an empty module
      config.resolve.fallback = {
        ...config.resolve.fallback,
        https: false,
      };
    }

    return config;
  },
};