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
import Footer from '../components/footer.js'
import styles from './index.module.css'
import AshlynBanner from '../components/assets/ashlyn-banner-v2.svg'

// import svgs
import Blob1 from '../components/assets/blob1.svg'
import Blob2 from '../components/assets/blob2.svg'
import Blob3 from '../components/assets/blob3.svg'
import Mockup from '../components/assets/mockup.svg'
import AshlynPerson from '../components/assets/ashlyn-lounge-person.svg'
import AshlynPlants from '../components/assets/ashlyn-lounge-plants.svg'

class RootIndex extends React.Component {
  render() {
    const handbooks = get(this, 'props.data.allSourceConfig.nodes')
    const productFeature = get(this, 'props.data.allProduct')

    
    return (
    <Parallax pages={2.9} ref={ref => (this.parallax = ref)}>
      {/* <ParallaxLayer offset={0} speed={0.5}>
        <span onClick={() => this.parallax.scrollTo(1)}>Layers can contain anything</span>
      </ParallaxLayer> */}


      <Layout location={this.props.location} >

        <div>
          <Helmet />


          <ParallaxLayer offset={0} speed={0.5} factor={1}>
            <Hero />
            <span onClick={() => this.parallax.scrollTo(.8)}>
                <ArrowIcon />
            </span>
          </ParallaxLayer>

          <ParallaxLayer offset={1.99} speed={0.45} style={{ pointerEvents: 'none' }}>
            <div className={styles.box}></div>
          </ParallaxLayer>

          <ParallaxLayer offset={1.99} speed={0.5} style={{ pointerEvents: 'none' }}>
            <div className={styles.boxLine}></div>
          </ParallaxLayer>

          <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <div style={{width: '50%', margin: '5%'}}>
              <ParallaxLayer offset={1} speed={0} factor={.2}>
                <div style={{width: '40%'}}>
                    <h2>Build products that people love</h2>
                    <p>Each handbook covers different strategys for product and business opperations. 
                      Ashlyn.app handbooks are a tool for you to leverage best practice in your team. 
                    </p>
                    <ul>
                      <li>benefit</li>
                      <li>benefit</li>
                      <li>benefit</li>
                    </ul>
                </div>
                <span onClick={() => this.parallax.scrollTo(1.6)}>
                  {/* <ArrowIcon /> */}
                </span>
              </ParallaxLayer>
            </div>
            <div style={{width: '50%', margin: '5%'}}>
              <ParallaxLayer offset={1} speed={0.8} factor={.2}>
                <AshlynPlants style={{marginTop: "-10%"}}/>
              </ParallaxLayer>
              <ParallaxLayer offset={1.1} speed={.2} factor={.2}>
                <AshlynPerson style={{marginTop: "-10%"}}/>
              </ParallaxLayer>
            </div>

          </div>

          {/* <ParallaxLayer offset={1.7} speed={.2}>
              <Blob3 style={{marginLeft: '60%'}}/>
          </ParallaxLayer> */}


          <ParallaxLayer offset={1.8} speed={0.5}>
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
        <ParallaxLayer offset={2.6} speed={-0.1}>
          <Footer />
        </ParallaxLayer>

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