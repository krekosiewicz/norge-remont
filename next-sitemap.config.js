module.exports = {
    siteUrl: `https://${process.env.DOMAIN_NAME}`, // Replace with your actual domain
    generateRobotsTxt: true, // Generate robots.txt
    sitemapSize: 7000, // Split sitemap into multiple files if needed
    outDir: './public/', // Sitemaps will be saved in the public directory
    // Optionally, you can add more configurations to include dynamic paths
    transform: async (config, path) => {
        // Custom transformation for modifying paths
        return {
            loc: path, // The URL of the page
            changefreq: 'daily',
            priority: 0.7,
            lastmod: new Date().toISOString(),
        };
    },
    additionalPaths: async (config) => [
        // Add dynamic paths you might be fetching from a CMS or API
    ],
};