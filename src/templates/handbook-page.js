import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import heroStyles from '../components/hero.module.css'
import HandbookNavItem from '../components/handbook-nav-item'

class HandbookPageTemplate extends React.Component {
  render() {
    //product page only 
    // [todo]: if page is products use allProduct, else use handbook data
    const page = get(this.props, 'data.productPage.nodes[0]')
    const handbookNav = get(this.props, 'data.productNav.nodes')
    // console.log('page context:', this.props)

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
        <ul>
        {handbookNav.map((item, i) => {
          return (
            <HandbookNavItem item={item.Name} link={item.url} id={i}/>
          )
        })}
        </ul>

        {/* <HandbookNav handbookNav={handbookNav} /> */}
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
  productPage: allProduct(filter: {id: {eq: $id}}){
    nodes {
      Cover
      Name
      id
      url
      html
    }
  }
  productNav: allProduct {
    nodes {
      Name
      url
    }
  }
}
`
