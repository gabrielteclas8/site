/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['gabrielrodriguesoficial.com.br', 'blob.v0.dev'],
  },
   typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
    optimizeCss: true,
  },
}

module.exports = nextConfig
