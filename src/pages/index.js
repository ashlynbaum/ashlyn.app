import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Hero from '../components/hero'
import Layout from '../components/layout'
import BookCover from '../components/book-cover'
import HandbookPreview from '../components/handbook-preview'
import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons'
import Blob1 from '../components/assets/blob1.svg'
import Blob2 from '../components/assets/blob2.svg'
import ArrowIcon from '../components/arrow-icon.js'

class RootIndex extends React.Component {
  render() {
    const handbooks = get(this, 'props.data.allSourceConfig.nodes')
    const productFeature = get(this, 'props.data.allProduct')
    // console.log('product', productFeature.nodes[0].Name)
    
    return (
    <Parallax pages={3} ref={ref => (this.parallax = ref)}>
      {/* <ParallaxLayer offset={0} speed={0.5}>
        <span onClick={() => this.parallax.scrollTo(1)}>Layers can contain anything</span>
      </ParallaxLayer> */}


      <Layout location={this.props.location} >

        <div>
          <Helmet />
          <ParallaxLayer offset={0} speed={0.5} factor={1}>
            <Hero />
            <span onClick={() => this.parallax.scrollTo(1)}>
                <ArrowIcon />
            </span>
          </ParallaxLayer>
          <ParallaxLayer offset={1.2} speed={-0.2} style={{ pointerEvents: 'none' }}>
            <Blob1 />
          </ParallaxLayer>
          <ParallaxLayer offset={1.5} speed={0} style={{ pointerEvents: 'none' }}>
            <Blob2 />
          </ParallaxLayer>
          
          <ParallaxLayer offset={1} speed={0.5}>
            <h2 className="section-headline">Strategies for you and your team to build products that people love. s</h2>
            <span onClick={() => this.parallax.scrollTo(2)}>
                <ArrowIcon />
            </span>
          </ParallaxLayer>
          <ParallaxLayer offset={2} speed={0.5}>
            <div className="wrapper">


              <BookCover />
              {/* link to product - using workbook/blog pages 
              passing through product handbook
              link to slug on welcome*/}
              <div className="article-list">
                <div>
                  <HandbookPreview handbook={productFeature} name="Product Feature Development" description="Building great products one feature at a time."/>
                </div>
              </div>
            </div>
        </ParallaxLayer>
        </div>
      </Layout>
    </Parallax>
    )
  }
}

export default RootIndex

export const query =  graphql`
{
  allProduct(sort: {fields: Order, order: ASC}){
    nodes {
      Cover
      Order
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