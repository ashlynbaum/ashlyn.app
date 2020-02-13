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
import MobileFooter from '../components/footer-handbook'
import styles from './index.module.css'


// import svgs
import AshlynPerson from '../components/assets/ashlyn-lounge-person.svg'
import AshlynPlants from '../components/assets/ashlyn-lounge-plants.svg'
import CheckCircle from '../components/assets/check-circle.svg'

class RootIndex extends React.Component {
  render() {
    const handbooks = get(this, 'props.data.allSourceConfig.nodes')
    const productFeature = get(this, 'props.data.allProduct')
   

      return (

      <div>
        <div className={styles.isMobile}>
          <Layout location={this.props.location}>
            <div>
              <Helmet />
              {/* is smaller than 320px */}
              <div className={styles.isSmallMobileHero}>
                <Hero isMobile="isSmallMobile"/>
              </div>
              {/* is larger than 320px */}
              <div className={styles.isMobileHero}>
                <Hero isMobile="isMobile"/>
              </div>
              <span onClick={() => this.parallax.scrollTo(.8)}>
                  <ArrowIcon />
              </span>

              <div>
                <div style={ {margin: '8%'}}>
                    <div className="benefit">
                        <h2>Build products that people love</h2>
                        <p>Strategies for product and business opperations. <a>ashlyn.app</a> handbooks are a sharable resources for you to build best practice in your team. 
                        </p>
                        <ul>
                          <li><CheckCircle /><span>Create shared language</span></li>
                          <li><CheckCircle /><span>Build a cross-functional process</span></li>
                          <li><CheckCircle /><span>Follow best practice</span></li>
                        </ul>
                    </div>
                </div>
                <div style={{margin: '10%'}}>
                  <AshlynPerson style={{position: 'absolute', width: "85%", height: "auto"}}/>
                  <AshlynPlants style={{ width: "100%", height: "auto"}}/>
                </div>

              </div>

            <div className={styles.wrapperHandbooks}>

              <div className={styles.handbookSectionMobile}>
                <BookCover isMobile={true}/>
                {/* link to product - using workbook/blog pages 
                passing through product handbook
                link to slug on welcome*/}
                <div className={styles.articleList}>
                  <div>
                    <HandbookPreview handbook={productFeature} name="Product Development" description="Building great products one feature at a time."/>
                  </div>
                </div>
              </div>
            </div>
            <MobileFooter />
          </div>
        </Layout>
      </div>
      <div className={styles.isDesktop}>
        <Parallax pages={4} ref={ref => (this.parallax = ref)}>
          {/* <ParallaxLayer offset={0} speed={0.5}>
            <span onClick={() => this.parallax.scrollTo(1)}>Layers can contain anything</span>
          </ParallaxLayer> */}


          <Layout location={this.props.location}>

            <div>
              <Helmet />


              <ParallaxLayer offset={0} speed={0.5}>
                <Hero />
                <span onClick={() => this.parallax.scrollTo(.8)}>
                    <ArrowIcon />
                </span>
              </ParallaxLayer>

              <ParallaxLayer offset={1} speed={0} factor={1} style={{ pointerEvents: 'none' }}>
                <div className={styles.benefitBox}></div>
              </ParallaxLayer>


              <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <div style={{width: '40%', margin: '0 0 0 15%'}}>
                  <ParallaxLayer offset={1.1} speed={0.2} factor={1}>
                    <div className="benefit" style={{width: '40%'}}>
                        <h2>Build products that people love</h2>
                        <p>Strategies for product and business opperations. <a>ashlyn.app</a> handbooks are a sharable resources for you to build best practice in your team. 
                        </p>
                        {/* <ul>
                          <li><CheckCircle /><span>Create shared language</span></li>
                          <li><CheckCircle /><span>Clear process</span></li>
                          <li><CheckCircle /><span>Follow best practice</span></li>
                        </ul> */}
                    </div>
                    <span onClick={() => this.parallax.scrollTo(1.6)}>
                      {/* <ArrowIcon /> */}
                    </span>
                  </ParallaxLayer>
                </div>
                <div style={{width: '40%', margin: '0 5% 0 0'}}>
                  <ParallaxLayer offset={1.05} speed={0.8} factor={.2}>
                    <AshlynPlants style={{marginTop: "-10%"}}/>
                  </ParallaxLayer>
                  <ParallaxLayer offset={1.15} speed={.2} factor={.2}>
                    <AshlynPerson style={{marginTop: "-10%"}}/>
                  </ParallaxLayer>
                </div>

              </div>

              {/* <ParallaxLayer offset={1.7} speed={.2}>
                  <Blob3 style={{marginLeft: '60%'}}/>
              </ParallaxLayer> */}



              {/* <ParallaxLayer offset={2.1} speed={0} factor={1} style={{ pointerEvents: 'none' }}>
                <div className={styles.box}></div>
              </ParallaxLayer> */}

              <ParallaxLayer offset={2} speed={-.2} factor={1} style={{ pointerEvents: 'none' }}>
                <div className={styles.boxLine}></div>
              </ParallaxLayer>

              <ParallaxLayer offset={2} speed={1.1} factor={1} style={{ pointerEvents: 'none' }}>
                <div className={styles.boxLine2}></div>
              </ParallaxLayer>
              <ParallaxLayer offset={2.05} speed={1.7} factor={1} style={{ marginLeft: '5%', pointerEvents: 'none', transform: 'scale(0.7)' }}>
                <div className={styles.boxLine}></div>
              </ParallaxLayer>
              <ParallaxLayer offset={2.1} speed={-.2} factor={1} style={{ pointerEvents: 'none' }}>
                <div className={styles.benefitBox}></div>
              </ParallaxLayer>



              {/* <ParallaxLayer offset={2.3} speed={0.15} factor={1} style={{ pointerEvents: 'none' }}>
                <div className={styles.box2}></div>
              </ParallaxLayer> */}

              <ParallaxLayer offset={1.86} speed={0} factor={1}>
                <div className={styles.wrapperHandbooks}>

                  <div className={styles.handbookSection}>
                    <BookCover />
                    {/* link to product - using workbook/blog pages 
                    passing through product handbook
                    link to slug on welcome*/}
                    <div className={styles.articleList}>
                      <div>
                        <HandbookPreview handbook={productFeature} name="Product Development" description="Building great products one feature at a time."/>
                      </div>
                    </div>
                  </div>
                </div>
              </ParallaxLayer>

            </div>
            {/* <ParallaxLayer offset={2.3} speed={-0.1}>
              <div className={styles.stickerWrapper}>
                <div><p>shop</p></div>
                <StickerCard />
              </div>
            </ParallaxLayer> */}

            <ParallaxLayer offset={3.4} speed={-0.1}>
              <Footer />
            </ParallaxLayer>

          </Layout>
        </Parallax>


      </div>
    </div>
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