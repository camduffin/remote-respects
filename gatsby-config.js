module.exports = {
  siteMetadata: {
    title: `Remote Respects`,
    description: `Remote Respects provides optimal quality funeral livestreaming. We can help you bring and share your memories and memorial with the people that matter.`,
    siteUrl: `https://production.d19hoapejxw6z2.amplifyapp.com/`,
    keywords: `funeral, graveside, service, memorial, funeral webcast, funeral livestream, memorial webcast, memorial livestream, graveside service, distance funeral,  funeral broadcast, memorial broadcast, graveside broadcast, ashes, commemoration`,
    image: `/isi-logo.png`,
    twitterUsername: `@iSiLIVE_Canada`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Remote Respects`,
        short_name: `Remote Respects`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/isi-logo.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    `gatsby-plugin-smoothscroll`,
    `gatsby-plugin-scroll-reveal`,
  ],
}
