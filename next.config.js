/** @type {import('next').NextConfig} */
const API_KEY = process.env.API_KEY;

const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
      source: "/old-blog/:path*", 
      destination: "/new-blog/:path*",
      permanent: false, // for SEO
    },
    {
      source: "/old-url/:path*", 
      destination: "/new-url/:path*",
      permanent: false, // for SEO
    },
    ]
  },
  async rewrites() {
    return [
      {
        source: "/api/movies", 
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
      },
      {
        source: "/api/movies/:id", 
        destination: `https://api.themoviedb.org/3/movie/:id?api_key=${API_KEY}`,
      }
    ]
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.tmdb.org',
        port: '',
        pathname: '/**',
      },
    ],
  }
}

module.exports = nextConfig
