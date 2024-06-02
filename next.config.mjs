/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ["localhost:8000", "127.0.0.1:8000", "open-api.digitalproduction.id"],
    },
    typescript: {
        ignoreBuildErrors: true,
    },
};

export default nextConfig;
