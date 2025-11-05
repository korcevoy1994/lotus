/** @type {import('next').NextConfig} */
const nextConfig = {
  // Улучшения для производительности и совместимости
  experimental: {
    optimizeCss: true,
  },
  // Настройки для статических ресурсов
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  // Настройки для экспорта (если понадобится)
  trailingSlash: false,
  // Настройки для заголовков
  headers: async () => [
    {
      source: '/(.*)',
      headers: [
        {
          key: 'X-Content-Type-Options',
          value: 'nosniff',
        },
        {
          key: 'X-Frame-Options',
          value: 'DENY',
        },
        {
          key: 'X-XSS-Protection',
          value: '1; mode=block',
        },
      ],
    },
  ],
};
export default nextConfig;
