/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        formats: ["image/avif", "image/webp"],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'png.pngtree.com',
                pathname: '/',
            },
        ],
    },
};

export default nextConfig;
