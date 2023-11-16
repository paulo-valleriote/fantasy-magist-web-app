/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_URL: "http://localhost:8080"
  },
  experimental: {
    serverActions: true
  }
}

module.exports = nextConfig
