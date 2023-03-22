/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    serverUrl: "http://localhost:8083/api/v1",
  },
};

module.exports = nextConfig;
