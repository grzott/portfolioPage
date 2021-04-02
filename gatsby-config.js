/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

// const __dirname = 'D:/PR/go-portfolio'
const path = require('path');


module.exports = {
  siteMetadata: {
    title: "Grzegorz Otto portfolio",
    description:
      "Grzegorz Otto frontend and mobile apps Developer.",
    image: "/me.png", // Path to your image you placed in the 'static' folder
    author: "Grzegorz Otto",
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `roboto\:400,700,900`,
          `poppins\:400,700`,
        ],
        display: 'swap',
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/
        }
      }
    },
  ],
}
