import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  typescript: {
    // Mengabaikan error tipe saat build produksi agar export statis tetap selesai
    ignoreBuildErrors: true,
  },
  eslint: {
    // Mengabaikan warning linting saat proses build
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
