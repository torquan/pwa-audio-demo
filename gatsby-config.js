module.exports = {
  siteMetadata: {
    title: "pwa-audio-demo",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-offline`,
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `pwa-audio-demo`,
        short_name: `AudioDemo`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
};
