/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    remotePatterns: [
      // 원격으로 사용할 url의 패턴 정의, 배열 형태
      {
        protocol: "http",
        hostname: "placehold.it",
      },
    ],
  },
};

module.exports = nextConfig
