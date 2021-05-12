module.exports = {
  siteMetadata: {
    title: `Remote Respects`,
    description: `Funeral webcast to share your memories and memorial with the people that matter.`,
    siteUrl: `https://www.remoterespects.ca`,
    keywords: `funeral, graveside, service, memorial, funeral webcast, funeral livestream, memorial webcast, memorial livestream, livestream, graveside service, distance funeral,  funeral broadcast, memorial broadcast, graveside broadcast, ashes, commemoration`,
    image: `/landing.jpg`,
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
        short_name: `RR`,
        start_url: `/`,
        background_color: `#655656`,
        theme_color: `#655656`,
        display: `fullscreen`,
        icon: `src/images/button.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-smoothscroll`,
    `gatsby-plugin-scroll-reveal`,
  ],
}
