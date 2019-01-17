module.exports = {
  siteMetadata: {
    title: `Damian Reiter's Personal Website`,
    description: `My personal website to showcase projects.`,
    author: `@Damian Reiter`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-layout`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
}
