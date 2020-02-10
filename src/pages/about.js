import React from 'react'
import styles from './about.module.css'
import StickerCard from '../components/sticker-card.js'
import Footer from '../components/footer-handbook.js'
import Image from '../static/ashlyn.jpg'
import Container from '../components/container.js'


class AboutPage extends React.Component {


  render() {
   
    return (
      <div>
        <div className={styles.header}>
          <img src={Image} />
        </div>
        <Container>
          <div className={styles.content}>
            <h1>👋 Hi, I’m Ashlyn</h1>
            <p>I’m passionate about building great digital products that improve peoples lives. I like to approach complicated problems and design elegant solutions.</p>
            <p>I’m a digital product strategist. I find complex problems and dive straight into the heart of them. I have worked in small and large teams from New Zealand in the health sector, social sector, and the financial sector.</p>
            <p>I care about the products I work on and take on work that makes a positive impact on the world either socially, environmentally, or from a governance perspective.</p>
            <h2>Why handbooks?</h2>
            <p>Handbooks are more accessible than ebooks. They’re like books - but designed for people who like the internet.</p>
            <p>Digital handbooks are:</p>
            <ul>
              <li>are easier to keep up to date and will always be more relevant,</li>
              <li>more accessible because I share them for free, and</li>
              <li>better designed for making content more accessible.</li>
            </ul>
            <h1>Get in touch</h1>
            <p>You can contact me in the Wellington (GMT +13) time zone at <a href="mailto:hey@ashlyn.app">hey@ashlyn.app</a></p>
          </div>
          <main className={styles.main}>
            <StickerCard />
          </main>
        </Container>
        <Footer />
      </div>

  
    )
  }
}


export default AboutPage

