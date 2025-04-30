/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // ← this enables static HTML export
  images: {
    unoptimized: true, // required for export
  },
  sassOptions: {
    compiler: "modern",
    silenceDeprecations: ["legacy-js-api"],
  },
};

export default nextConfig;
