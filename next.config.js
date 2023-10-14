const withMdx = require('@next/mdx')();

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
    instrumentationHook: true,
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
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
};

module.exports = withMdx(nextConfig);
