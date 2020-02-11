const path = require(`path`);

module.exports = {
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-alias-imports`,
    `gatsby-plugin-provide-react`,
    `gatsby-env-variables`,
    `gatsby-plugin-dynamic-routes`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-plugin-sass",
      options: {
        data: `@import "${__dirname}/src/styles/index.scss";`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`)
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Rita RH`,
        short_name: `Rita RH`,
        start_url: `/`,
        icon: `src/images/gatsby-icon.png`
      }
    },
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: `${__dirname}/src/pages`,
        ignore: {
          patterns: [`**/*`]
        }
      }
    }
  ]
};
