/** @type {import('next').NextConfig} */
// Experimental type routes
// @ https://nextjs.org/blog/next-13-2#statically-typed-links
const nextConfig = {
  experimental: {
    appDir: true,
    typedRoutes: true,
  },
}

module.exports = nextConfig