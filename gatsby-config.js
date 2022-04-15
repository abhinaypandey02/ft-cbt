const meta={
  title:'Freshtables',
  siteUrl:'https://freshtables.in',
  description:"Freshtables is Farm to Door fresh vegetables delivery. We grow and procure vegetables from local farms and deliver them to urban areas like Home & Retail outlets, Businesses, etc.",
  shortTitle:"Freshtables"
}
/** @type {import('gatsby').GatsbyConfig} */
module.exports = {
  pathPrefix: "/cbt",
  siteMetadata: {
    title: meta.title,
    siteUrl: meta.siteUrl,
    description:meta.description
  },
  plugins: ["gatsby-plugin-sass", "gatsby-plugin-image", "gatsby-plugin-react-helmet", "gatsby-plugin-sitemap",
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: meta.title,
        short_name: meta.shortTitle,
        start_url: '/',
        background_color: 'white',
        theme_color: '#101C45',
        display: 'standalone',
        lang: 'en',
        icon: 'src/images/icon.png',
        icons: [
          {
            "src": "src/images/icon.png",
            "sizes": "48x48",
            "type": "image/png",
            "purpose": "any maskable"
          },
          {
            "src": "src/images/icon.png",
            "sizes": "72x72",
            "type": "image/png",
            "purpose": "any maskable"
          },
          {
            "src": "src/images/icon.png",
            "sizes": "96x96",
            "type": "image/png",
            "purpose": "any maskable"
          },
          {
            "src": "src/images/icon.png",
            "sizes": "144x144",
            "type": "image/png",
            "purpose": "any maskable"
          },
          {
            "src": "src/images/icon.png",
            "sizes": "192x192",
            "type": "image/png",
            "purpose": "any maskable"
          },
          {
            "src": "src/images/icon.png",
            "sizes": "256x256",
            "type": "image/png",
            "purpose": "any maskable"
          },
          {
            "src": "src/images/icon.png",
            "sizes": "384x384",
            "type": "image/png",
            "purpose": "any maskable"
          },
          {
            "src": "src/images/icon.png",
            "sizes": "512x512",
            "type": "image/png",
            "purpose": "any maskable"
          },
        ],},
        description:meta.description

  }, "gatsby-plugin-mdx", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  }]
};
