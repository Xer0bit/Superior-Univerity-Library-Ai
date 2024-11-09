const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable default image optimization
  },
  assetPrefix: isProd ? '/Superior-Univerity-Library-Ai/' : '',
  basePath: isProd ? '/Superior-Univerity-Library-Ai' : '',
  output: 'export'
};

export default nextConfig;
