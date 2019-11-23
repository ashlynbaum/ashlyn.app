import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Hero from '../components/hero'
import Layout from '../components/layout'
import ArticlePreview from '../components/article-preview'
import HandbookPreview from '../components/handbook-preview'

class RootIndex extends React.Component {
  render() {
    const handbooks = get(this, 'props.data.allSourceConfig.nodes')
    const productFeature = get(this, 'props.data.allProduct')
    // console.log('product', productFeature.nodes[0].Name)
    return (
      <Layout location={this.props.location} >
        <div>
          <Helmet />
          <Hero/>
          <div className="wrapper">
            <h2 className="section-headline">list of handbooks</h2>


            {/* link to product - using workbook/blog pages 
            passing through product handbook
            link to slug on welcome*/}
            <ul className="article-list">
              <li>
                <HandbookPreview handbook={productFeature} name="Product Feature Development" description="Building great products one feature at a time."/>
              </li>
            </ul>


          </div>
        </div>
      </Layout>
    )
  }
}

export default RootIndex

export const query =  graphql`
{
  allProduct(sort: {fields: Name, order: ASC}){
    nodes {
      Cover
      Name
      url
    }
  }
  allSourceConfig {
    nodes {
      name
    }
  }
}
`