/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      // Add your WordPress domain here
      'your-wordpress-site.com',
      // Add any other image domains
      'localhost',
    ],
  },
  env: {
    WORDPRESS_API_URL: process.env.WORDPRESS_API_URL,
  },
}

module.exports = nextConfig