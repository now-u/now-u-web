const withRoutes = require("nextjs-routes/config")();

// TODO Remove wildcard for remotePatterns and update to only allow images s3 bucket
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

module.exports = withRoutes(nextConfig);
