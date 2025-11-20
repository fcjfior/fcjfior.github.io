/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true
    },
    reactStrictMode: false,
    // basePath: '/fcjfior', // for page deployment
    env: {
        ART_URL: process.env.ART_URL,
    }
}

module.exports = nextConfig
