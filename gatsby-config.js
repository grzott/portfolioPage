/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

// const __dirname = 'D:/PR/go-portfolio'
const path = require('path');


module.exports = {
  plugins: [
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `roboto\:400,700`,
          `poppins\:400,700`,
        ],
        display: 'swap',
      },
    },
  ],
}
