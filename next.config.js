/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ["blob.v0.dev", "gabrielrodriguesoficial.com.br"],
    unoptimized: true,
  },
  experimental: {
    optimizeCss: true,
  },
  trailingSlash: true,
  output: "export",
  distDir: "out",
  basePath: "",
  assetPrefix: "",
}

module.exports = nextConfig
