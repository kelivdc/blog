/** @type {import('next').NextConfig} */

const env = {
  admin: process.env.ADMIN_PATH,
  server: process.env.SERVER_API
}

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: env
}

module.exports = nextConfig
