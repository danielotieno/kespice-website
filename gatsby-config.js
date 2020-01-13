require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`
});

module.exports = {
  siteMetadata: {
    title: "KeSpice Restaurant App",
    description:
      "KeSpice Restaurant is an app that will help you enter a restaurant, sit comfortably and then begin checking the menu right off your phone and place the order. You will be notified when your food is ready. Have the best conversations or finish up whatever work you have at your comfort. ",
    author: "@danielotienoke Daniel Otieno"
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`
      }
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-playground`
  ]
};
