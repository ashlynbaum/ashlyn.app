import React from 'react'
import AshlynBanner from './assets/ashlyn-banner-v2.svg'
import styles from './hero.module.css'
import SubscribeForm from './hero-form.js'
import Squiggles from './assets/squiggles.svg'
import animation from './animation.css'
import Navigation from '../components/navigation'




export default ({ data }) => (
  <div>
    <div className={styles.shaddow}>
      {/* <Navigation /> */}
      <div className={styles.hero}>
        <AshlynBanner className={styles.ashlynBanner}/>
        <div className={styles.heroRight}>
          <div>
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
    </div>
    <div>
      <div>arrow</div>
      <div>get started</div>
    </div>
  </div>
)

