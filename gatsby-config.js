const path = require(`path`)

module.exports = {
  plugins: [
    `gatsby-plugin-sharp`,
    `gatsby-alias-imports`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-provide-react`,
    `gatsby-plugin-dynamic-routes`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        data: `@import "${__dirname}/src/styles/index.scss";`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Luan Bitar | JSM`,
        short_name: `Luan Bitar | JSM`,
        start_url: `/`,
        theme_color: `#524948`,
        icon: `src/images/jsm-logo.png`,
      },
    },
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: `${__dirname}/src/pages`,
        ignore: {
          patterns: [`**/*`],
        },
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
  ],
}
