import React from 'react'
import AshlynBanner from './assets/ashlyn-banner-v2.svg'
import styles from './hero.module.css'
import SubscribeForm from './hero-form.js'
import Squiggles from './assets/squiggles.svg'
import {useSpring, animated} from 'react-spring'
import Navigation from './navigation.js'
import Animation from './animation.css'

// import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons'



export default ({ data }) => {
  const props = useSpring({height: '90vh', from: {height: '110vh'}})

  return (
    <div>
      <div className={styles.shaddow}>
        {/* <Navigation /> */}
        <animated.div className={styles.hero} style={props}>
          <div className={styles.innerWrapper}>
            <div className={styles.heroLeft}>
              <AshlynBanner className={styles.ashlynBanner}/>
            </div>
            <div className={styles.heroRight}>
              <div className={styles.websiteNameWrapper}>
                <div className={styles.websiteName}>ashlyn.app</div>
              </div>
              <div>
                <h1 className={styles.heroHeadline}>handbooks</h1>
                <div className={styles.heroSubtitle}>
                  <div>for building good digital products</div>
                  <div> and other things</div>
                </div>
              </div>
              <SubscribeForm></SubscribeForm>
            </div>
            <Squiggles className={styles.squiggles} />
          </div>
        </animated.div>
      </div>
    </div>
  ) 

}

