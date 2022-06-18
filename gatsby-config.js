/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Rohan Raj Gautam",
    description:
      "A highly self-motivated software engineer with a passion for always leaning new things. Find more about him and his works here.",
    author: "@rohanrajgautam",
    twitterUsername: "@rohanrajgautam",
    image: "/twitter-img.png",
    siteUrl: "https://www.rohanrajgautam.com.np",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-178510917-1",
        head: true,
        anonymize: true,
      },
    },
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
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://www.rohanrajgautam.com.np",
        sitemap: "https://www.rohanrajgautam.com.np/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Roboto",
              variants: ["400", "700"],
            },
            { family: "Open Sans" },
          ],
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Rohan Raj Gautam`,
        short_name: `RRG`,
        start_url: `/`,
        background_color: `#000`,
        theme_color: `#000`,
        display: `standalone`,
        icon: `src/assets/icon.png`,
        include_favicon: false,
        cache_busting_mode: "none",
        crossOrigin: `use-credentials`,
      },
    },
    `gatsby-plugin-offline`,
  ],
}
