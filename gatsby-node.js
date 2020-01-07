const Promise = require('bluebird')
const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const handbookPage = path.resolve('./src/templates/handbook-page.js')
    resolve(
      graphql(
        `
        {
          allProduct(sort: {fields: Order, order: ASC}){
            nodes {
              id
              Name
              url
            }
          }
        }
          `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        // const posts = result.data.allContentfulBlogPost.edges
        const productPages = result.data.allProduct.nodes
        
        productPages.forEach((page, index) => {
          createPage({
            path: `/product-handbook/${page.url}/`,
            component: handbookPage,
            context: {
              id: page.id,
              slug: page.url,
              cover: page.Cover,
              name: page.Name,
              prev: index === 0 ? null : productPages[index - 1],
              next: index === (productPages.length - 1) ? null : productPages[index + 1]
            },
          })
        })
      })
    )
  })
}
