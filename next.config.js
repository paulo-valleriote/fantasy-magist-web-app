/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    PUBLIC_URL: "http://localhost:3000",
    API_URL: "http://localhost:8080"
  },
  experimental: {
    serverActions: {
      allowedOrigins: process.env.PUBLIC_URL,
      bodySizeLimit: '2mb'
    }
  }
}

module.exports = nextConfig
