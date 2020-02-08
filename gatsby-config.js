
require(`dotenv`).config({
  path: `.env`,
})
const newsletterFeed = require(`./src/utils/newsletterFeed`)

module.exports = {
  siteMetadata: {
    siteTitle: `Aaron Lin`,
    siteTitleAlt: `Aaron Lin's Blog`,
    siteHeadline: `Aaron Lin's Blog`,
    siteUrl: `https://aarlin.netlify.com`,
    siteDescription: `Personal blog for writing about programming.`,
    siteLanguage: `en`,
    siteImage: `/banner.jpg`,
    author: `@`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog-core`
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: newsletterFeed,
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `minimal-blog - @lekoarts/gatsby-theme-minimal-blog`,
        short_name: `minimal-blog`,
        description: `Typography driven, feature-rich blogging theme with minimal aesthetics. Includes tags/categories support and extensive features for code blocks such as live preview, line numbers, and code highlighting.`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#6B46C1`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-theme-ui`,
    // `gatsby-plugin-webpack-bundle-analyser-v2`,
  ],
}
