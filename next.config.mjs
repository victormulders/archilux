/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{hostname: 'eu-central-1-shared-euc1-02.graphassets.com'}], // Add your allowed hostname here
    },
};

export default nextConfig;
