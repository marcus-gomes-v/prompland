/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    disableStaticImages: true,
    minimumCacheTTL: 300,
    formats: ['image/webp', 'image/avif'],
    domains: ['firebasestorage.googleapis.com', 'lh3.googleusercontent.com', 'tailwindui.com','images.unsplash.com'],
  },

}
