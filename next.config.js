/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  output: "export",

  // Optional: Change the output directory `out` -> `dist`
  distDir: "dist",
  images: {
    unoptimized: true,
  },
  env:{
    BASE_URL: 'https://iq.divami.com/tsbe',
    NEXT_PUBLIC_ACCESS_KEY: '1d0a2c6f1ffaab407480bb02d5acde7900a069da932637822c19691fb04d98736ad86c78360d49d0e0b7e5a2a528c344d5e7b5aa666398ce0f17467eecc3259e97385fd432e7c32271299b848e75e5f631ce8806706a43d2949f043dbbc3bf87daa8c3be58d82734d4f9a19a4704a6d7ec1929b5ae47a51008328b33f23fcb82'
  }
};

module.exports = nextConfig;
