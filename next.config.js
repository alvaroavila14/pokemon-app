/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  //* The below config should be added when trying to fetch image from external links when doing SSG
  // images: {
  //   domains: ["raw.githubusercontent.com"],
  // },
};

module.exports = nextConfig;
