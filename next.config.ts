import { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig:NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },

};

module.exports = nextConfig;