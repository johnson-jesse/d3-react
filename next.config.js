/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://multitenant.snapattack.com/api/:path*/',
      },
    ]
  },
}
