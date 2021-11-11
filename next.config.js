/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  reactStrictMode: true,
  assetPrefix: isProd ? 'https://kayaleeeee.github.io/gh-page-next' : '',
  images: {
    loader: 'imgix',
    path: 'https://localhost:3000/',
  },
};
