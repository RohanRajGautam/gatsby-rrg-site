/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Rohan Raj Gautam | Full Stack Developer",
    description:
      "A highly self-motivated Full Stack Software Developer with a passion for always leaning new things. Find more about him and his works here.",
    author: "@rohanrajgautam",
    twitterUsername: "@rohanrajgautam",
    image: "/twitter-img.png",
    siteUrl: "https://www.rohanrajgautam.com.np",
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets/`,
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `https://rohanrajgautam.herokuapp.com`,
        queryLimit: 1000, // Default to 100
        //  ONLY ADD TO ARRAY IF YOU HAVE DATA IN STRAPI !!!!
        contentTypes: [`jobs`, `projects`, `blogs`],
        singleTypes: [`about`],
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Roboto`,
            variants: [`400`, `700`],
          },
          {
            family: `Open Sans`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Rohan Raj Gautam`,
        short_name: `RRG`,
        description: `A highly self-motivated Full Stack Software Developer with a passion for always leaning new things. Find more about him and his works here.`,
        lang: `en`,
        start_url: `/`,
        background_color: `#E0FCFF`,
        theme_color: `#2caeba`,
        display: `standalone`,

        icons: [
          {
            src: `/assets/rrg-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/assets/rrg-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
        include_favicon: false,
        cache_busting_mode: "none",
        crossOrigin: `use-credentials`,
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        workboxConfig: {
          globPatterns: [`src/assets/rrg-512x512.png`],
        },
      },
    },
  ],
}
