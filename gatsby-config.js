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
  )
}

module.exports = {
  siteMetadata: {
    title: 'Gatsby Contentful starter',
  },
  pathPrefix: '/gatsby-contentful-starter',
  plugins: [
    'gatsby-transformer-remark',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-contentful',
      options: contentfulConfig,
    },
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
            endpoint: '"https://gmail.us20.list-manage.com/subscribe/post?u=60af8c8f369265bc4fef99726&amp;id=73c6d7ddc5',
        },
    },
    {
            resolve: `gatsby-source-notion-database`,
            options: {
                sourceConfig : [
                   {
                      "name": "prodcut development handbook pages",
                      "table": "https://www.notion.so/ashlynbaum/67873ebd7f5e4b8a968cb69909a889b0?v=29cb786f18b14b709878e53bbe966fb1",
                      "cacheType": "static"
                   }
                ]
            }
        }
  ],
}

