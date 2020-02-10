import React from 'react'
import AshlynBanner from './assets/ashlyn-banner-v2.svg'
import styles from './hero.module.css'
import SubscribeForm from './hero-form.js'
import Squiggles from './assets/squiggles.svg'
import {useSpring, animated} from 'react-spring'
import Navigation from './navigation.js'
import Animation from './animation.css'

// import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons'



export default ({ data, isMobile }) => {
  const props = useSpring({height: '90vh', from: {height: '110vh'}})

  return (
    <div>
      <div className={styles.shaddow}>
        {/* <Navigation /> */}
        <animated.div className={isMobile ? styles.heroMobile : styles.hero} style={props}>
          <div className={isMobile ? styles.innerWrapperMobile : styles.innerWrapper}>
            <div className={styles.heroLeft}>
              <AshlynBanner className={isMobile ? styles.ashlynBannerMobile : styles.ashlynBanner}/>
            </div>
            <div className={isMobile ? styles.heroRightMobile : styles.heroRight}>
              <div className={styles.websiteNameWrapper}>
                <div className={styles.websiteName}>ashlyn.app</div>
              </div>
              <div>
                <h1 className={styles.heroHeadline}>handbooks</h1>
                <div className={isMobile ? styles.heroSubtitleMobile : styles.heroSubtitle}>
                  <div>for building good digital products</div>
                  <div> and other things</div>
                </div>
              </div>
              <SubscribeForm></SubscribeForm>
            </div>
            <Squiggles className={isMobile ? styles.squigglesMobile :styles.squiggles} />
          </div>
        </animated.div>
      </div>
    </div>
  ) 

}

