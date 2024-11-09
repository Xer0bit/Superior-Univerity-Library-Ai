const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable default image optimization
    domains: ['covers.openlibrary.org'], // Add allowed image domains
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
