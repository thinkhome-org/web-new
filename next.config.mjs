import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  // Optionally, add any other Next.js config below
};

const withMDX = createMDX({
  // No options with functions for Turbopack compatibility during next build
  // as standard markdown features are supported out-of-the-box
});

export default withMDX(nextConfig);
