/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['placeholder.com'],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.ttf$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'static/fonts/',
          },
        },
      ],
    });
    return config;
  },
};

export default nextConfig;

