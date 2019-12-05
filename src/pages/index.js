import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Hero from '../components/hero'
import Layout from '../components/layout'
import BookCover from '../components/book-cover'
import HandbookPreview from '../components/handbook-preview'
import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons'
import ArrowIcon from '../components/arrow-icon.js'
import styles from '../components/hero.module.css'
import AshlynBanner from '../components/assets/ashlyn-banner-v2.svg'

// import svgs
import Blob1 from '../components/assets/blob1.svg'
import Blob2 from '../components/assets/blob2.svg'
import Blob3 from '../components/assets/blob3.svg'
import Box from '../components/assets/box.svg'
import Mockup from '../components/assets/mockup.svg'

class RootIndex extends React.Component {
  render() {
    const handbooks = get(this, 'props.data.allSourceConfig.nodes')
    const productFeature = get(this, 'props.data.allProduct')
    // console.log('product', productFeature.nodes[0].Name)
    
    return (
    <Parallax pages={4} ref={ref => (this.parallax = ref)}>
      <ParallaxLayer offset={0} speed={0.5}>
        <span onClick={() => this.parallax.scrollTo(1)}>Layers can contain anything</span>
      </ParallaxLayer>


      <Layout location={this.props.location} >

        <div>
          <Helmet />


          <ParallaxLayer offset={0} speed={1} factor={1}>
            <Hero />
            <span onClick={() => this.parallax.scrollTo(.8)}>
                <ArrowIcon />
            </span>
          </ParallaxLayer>

          {/* <ParallaxLayer offset={1.2} speed={-0.2} style={{ pointerEvents: 'none' }}>
            <Blob1 />
          </ParallaxLayer>

          <ParallaxLayer offset={1.5} speed={0} style={{ pointerEvents: 'none' }}>
            <Blob2 />
          </ParallaxLayer> */}

          {/* <ParallaxLayer offset={0} speed={-1} factor={.5}>
            <AshlynBanner className={styles.ashlynBanner}/>
          </ParallaxLayer> */}

          <ParallaxLayer offset={1} speed={1.4}>
            <Box style={{marginLeft: "8%"}}/>
          </ParallaxLayer>
          <ParallaxLayer offset={1.3} speed={-0.2} factor={3}>
            <Mockup style={{marginLeft: '15%'}}/>
          </ParallaxLayer>
          <ParallaxLayer offset={2} speed={1} factor={1}>
            <Blob3 style={{marginLeft: '60%'}}/>
          </ParallaxLayer>
          {/* <ParallaxLayer offset={1} speed={-1} factor={.5}>
          </ParallaxLayer> */}
          
          <ParallaxLayer offset={1.3} speed={-0.1}>
            <h2 style={{marginLeft: '50%'}}>Strategies to build products that people love</h2>
            {/* <span onClick={() => this.parallax.scrollTo(2)}>
                <ArrowIcon />
            </span> */}
          </ParallaxLayer>
          <ParallaxLayer offset={2} speed={0.5}>
            <div className="wrapper">

              <div className="HandbookSection" style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around'}}>
                <BookCover />
                {/* link to product - using workbook/blog pages 
                passing through product handbook
                link to slug on welcome*/}
                <div className="article-list" style={{margin: '6%'}}>
                  <div>
                    <HandbookPreview handbook={productFeature} name="Product Feature Development" description="Building great products one feature at a time."/>
                  </div>
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