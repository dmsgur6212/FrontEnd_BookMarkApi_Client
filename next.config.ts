/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/bookmarks',
        permanent: true
      }
    ]
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `http://bookmarker-api-svc:8080/api/:path*`//'http://bookmarker-api-svc:8080/:path*/' // Proxy to Backend
      }
    ]
  },
  serverRuntimeConfig: {
    API_BASE_URL: process.env.NEXT_PUBLIC_SERVER_API_BASE_URL
  },
  publicRuntimeConfig: {
    API_BASE_URL: process.env.NEXT_PUBLIC_CLIENT_API_BASE_URL
  },
};

export default nextConfig;
