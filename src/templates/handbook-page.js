import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import Img from 'gatsby-image'
import SVG from 'react-inlinesvg';
import Layout from '../components/layout'
import HandbookNavList from '../components/handbook-nav-list'
import { parseImageUrl } from 'notabase/src/utils'
import Navigation from '../components/navigation'


class HandbookPageTemplate extends React.Component {
  render() {
    //product page only 
    // [todo]: if page is products use allProduct, else use handbook data
    const page = get(this.props, 'data.productPage.nodes[0]')
    const handbookNavList = get(this.props, 'data.productNav.nodes')
    // console.log('page context:', this.props)
    

    const coverImageUrl = parseImageUrl(page.Cover[0])



    return (
      
      <Layout location={this.props.location} >


        {/* <Helmet title={`${post.title} | ${siteTitle}`} /> */}
        <Helmet title={`${page.Name} | ${page.Name}`} />

        <Navigation />



        <h1>{page.Name}</h1>
        {page.Cover && <img src={coverImageUrl} />}
        <h2>{page.Subheading}</h2>

        <HandbookNavList handbookNavList={handbookNavList} />

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


export const pageQuery = graphql`
query HandbookById($id: String!) {
  productPage: allProduct(filter: {id: {eq: $id}}){
    nodes {
      Cover
      Name
      id
      url
      html
      Subheading
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
