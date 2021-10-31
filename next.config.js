/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    loader: 'imgix',
    path: '',
    domains: ['res.cloudinary.com'],
  },
};
