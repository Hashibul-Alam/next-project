import { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig:NextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Ensures images work correctly in static export
  },
  trailingSlash: true, // (Optional) For SEO-friendly URLs
};

module.exports = nextConfig;