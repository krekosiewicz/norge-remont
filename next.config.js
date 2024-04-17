/** @type {import('next').NextConfig} */
// Import the bundle analyzer plugin
const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
});

// Base Next.js configuration
const nextConfig = {
    // ... rest of the configuration.
    output: "standalone",
};

// Export the configuration wrapped by the bundle analyzer
module.exports = withBundleAnalyzer(nextConfig);