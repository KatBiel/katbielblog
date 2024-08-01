/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `KatBiel Tech World`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [ {
    resolve: `gatsby-plugin-google-fonts`,
    options: {
      fonts: [
        `Roboto:400`, 
        `Roboto Serif:300, 500, 500i`,
      ],
      display: 'swap',
    },
  },
  "gatsby-plugin-image",
  "gatsby-plugin-sharp",
],
}
