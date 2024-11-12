const withRoutes = require("nextjs-routes/config")();

// TODO Remove wildcard for remotePatterns and update to only allow images s3 bucket
/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/app/feedback",
        destination: "https://forms.gle/xenzFkRVrELsqnnB9",
        permanent: true, // Use true for 301 redirect, false for 302
      },
      {
        source: "/app/research/signup",
        destination: "https://forms.gle/DjSdjH1DfNtRwXiP7",
        permanent: true, // Use true for 301 redirect, false for 302
      },
    ];
  },
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
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
