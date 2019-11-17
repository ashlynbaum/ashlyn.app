import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import HanbookNav from '../components/handbook-nav'

import heroStyles from '../components/hero.module.css'
import handbookNav from '../components/handbook-nav'

class HandbookPageTemplate extends React.Component {
  render() {
    //product page only 
    // [todo]: if page is products use allProduct, else use handbook data
    const page = get(this.props, 'data.allProduct.nodes[0]')
    const handbook = get(this.props, 'data.allProduct')

    console.log('handbook', handbook)

    // const siteTitle = get(this.props, 'data.site.siteMetadata.title')

    return (
      <Layout location={this.props.location} >
        {/* <div style={{ background: '#fff' }}>
          <Helmet title={`${post.title} | ${siteTitle}`} />
          <div className={heroStyles.hero}>
            <Img className={heroStyles.heroImage} alt={post.title} fluid={post.heroImage.fluid} />
          </div>
          <div className="wrapper">
            <h1 className="section-headline">{post.title}</h1>
            <p
              style={{
                display: 'block',
              }}
            >
              {post.publishDate}
            </p>
            <div
              dangerouslySetInnerHTML={{
                __html: post.body.childMarkdownRemark.html,
              }}
            />
          </div>
        </div> */}

        {/* <Helmet title={`${page.name} | ${page.name}`} /> */}
        {/* <Img className={heroStyles.heroImage} alt={post.title} fluid={post.heroImage.fluid} /> */}

        
        {/* <HandbookNav /> */}
        <h2 className="section-headline">{page.Name}</h2>

        <div
              dangerouslySetInnerHTML={{
                __html: page.html,
              }}
            />

      </Layout>
    )
  }
}

export default HandbookPageTemplate

// export const pageQuery = graphql`
//   query BlogPostBySlug($slug: String!) {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//     contentfulBlogPost(slug: { eq: $slug }) {
//       title
//       publishDate(formatString: "MMMM Do, YYYY")
//       heroImage {
//         fluid(maxWidth: 1180, background: "rgb:000000") {
//           ...GatsbyContentfulFluid_tracedSVG
//         }
//       }
//       body {
//         childMarkdownRemark {
//           html
//         }
//       }
//     }
//   }
// `
export const pageQuery = graphql`
query HandbookById($id: String!) {
  allProduct(filter: {id: {eq: $id}}){
    nodes {
      Cover
      Name
      id
      url
      html
    }
  }
}
`
