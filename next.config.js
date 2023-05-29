/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true
  },
  env: {
    CLIENT_ID: "buJi0mkdSEPG88ALzzND7kg0wq-76_txIx-b85EL_wY",
    CLIENT_SECRET: "DjTe6gQ7hy-ImJ5SGs07xw2ydalRgAIMABbbSaSP-ts",
    ISSUER: "http://localhost:3000/profile/edit",

    JWT_SECRET: "DlsShekLm/yYkHvvUH1vPduDDSa9ijwLWC9DdnLdWTc="
  },
}

module.exports = nextConfig
