import React from 'react'
import Img from 'gatsby-image'
import AshlynBanner from './assets/ashlyn-banner.svg'
import animationStyles from './animation.css'
import styles from './hero.module.css'
import SubscribeForm from './hero-form.js'


// export default ({ data }) => (
//   <div className={styles.hero}>
//     <Img className={styles.heroImage} alt={data.name} fluid={data.heroImage.fluid} />
//     <div className={styles.heroDetails}>
//       <h3 className={styles.heroHeadline}>{data.name}</h3>
//       <p className={styles.heroTitle}>{data.title}</p>
//       <p>{data.shortBio.shortBio}</p>
//     </div>
//   </div>
// )



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

