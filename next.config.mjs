/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['gabrielroriguesoficial.com.br', 'blob.v0.dev'],
  },
  experimental: {
    optimizeCss: true,
  },
}

module.exports = nextConfig