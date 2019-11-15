import React from 'react'
import AshlynBanner from './assets/ashlyn-banner.svg'
import styles from './hero.module.css'
import SubscribeForm from './hero-form.js'




export default ({ data }) => (
  <div class={styles.hero}>
    <AshlynBanner />
    <div class={styles.heroRight}>
      <div>
        <div class={styles.websiteName}>ashlyn.app</div>
      </div>
      <div>
        <h1 class={styles.heroHeadline}>handbooks</h1>
        <div class={styles.heroSubtitle}>
          <div>for building good digital products</div>
          <div> and other things</div>
        </div>
      </div>
      <SubscribeForm></SubscribeForm>
    </div>
  </div>
)

