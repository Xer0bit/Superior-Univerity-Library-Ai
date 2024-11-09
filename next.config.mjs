const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    domains: ['covers.openlibrary.org'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'covers.openlibrary.org',
        pathname: '/b/id/**',
      },
    ],
  },
  assetPrefix: isProd ? '/Superior-Univerity-Library-Ai/' : '',
  basePath: isProd ? '/Superior-Univerity-Library-Ai' : '',
  output: 'export'
};

export default nextConfig;
