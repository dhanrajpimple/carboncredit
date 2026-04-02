import { fileURLToPath } from "url";
import path from "path";

const projectNodeModules = path.join(path.dirname(fileURLToPath(import.meta.url)), "node_modules");

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  webpack: (config) => {
    config.resolve.modules = [
      projectNodeModules,
      "node_modules",
      ...(config.resolve.modules || []),
    ];
    return config;
  },
  turbopack: {},
};

export default nextConfig;
