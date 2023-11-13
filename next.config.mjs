import nextMDX from '@next/mdx'

const withMdx = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: []
  }
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    instrumentationHook: true,
    mdxRs: true
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

export default withMdx(nextConfig);
