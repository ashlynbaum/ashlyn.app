require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
})

const contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  host: process.env.CONTENTFUL_HOST
}

const { spaceId, accessToken } = contentfulConfig

if (!spaceId || !accessToken) {
  throw new Error(
    'Contentful spaceId and the access token need to be provided.'
  );
}

module.exports = {
  siteMetadata: {
    title: 'Gatsby Contentful starter',
  },
  pathPrefix: '/gatsby-contentful-starter',
  plugins: [
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        // In your gatsby-transformer-remark plugin array
        // CommonMark mode (default: true)
         commonmark: true,
         // Footnotes mode (default: true)
         footnotes: true,
         // Pedantic mode (default: true)
         pedantic: true,
         // GitHub Flavored Markdown mode (default: true)
         gfm: true,
         // Plugins configs
        plugins: [{
          resolve: 'gatsby-remark-emojis',
          options: {
            // Deactivate the plugin globally (default: true)
            active : true,
            // Add a custom css class
            class  : 'emoji-icon',
            // Select the size (available size: 16, 24, 32, 64)
            size   : 64,
            // Add custom styles
            styles : {
              display      : 'inline',
              margin       : '0',
              'margin-top' : '1px',
              position     : 'relative',
              top          : '5px',
              width        : '25px'
            }
          }
        }]
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/
        }
      }
    },
    { resolve: 'gatsby-plugin-mailchimp',
        options: {
            endpoint: 'https://gmail.us20.list-manage.com/subscribe/post?u=60af8c8f369265bc4fef99726&amp;id=73c6d7ddc5',
        },
    },
    // {  resolve: 'gatsby-source-notion-database',
    //     options: {
    //         sourceConfig : [
    //            {
    //               "name": "post",
    //               configTable: "https://www.notion.so/ashlynbaum/67873ebd7f5e4b8a968cb69909a889b0?v=29cb786f18b14b709878e53bbe966fb1",
    //               "cacheType": "static"
    //            }
    //         ]
    //     }
    // }
    {
      resolve: "gatsby-source-notion-database",
      options: {
        configTable: "https://www.notion.so/ashlynbaum/2eb7999026f1465ea58832e1620dcdb6?v=a4e2bccfea4a4087b3fcd18f35c18d91"
      }
    }
  ],
};

