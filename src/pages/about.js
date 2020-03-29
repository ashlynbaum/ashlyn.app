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
          <div className={styles.content}>
            <h1>👋 Hi, I’m Ashlyn</h1>
            <p>I’m passionate about building great digital products that improve peoples lives. I like to approach complicated problems and design elegant solutions.</p>
            <p>I’m a digital product strategist. I find complex problems and dive straight into the heart of them. I have worked in small and large teams from New Zealand in the health, social, energy, and financial sector. I care about the products I work on, and I choose to work on products that improve peoples lives and, hopefully, make a positive environment or social impact.</p>
            <h1>Why handbooks?</h1>
            <p>Handbooks are more accessible than ebooks. They’re like books - but designed for people who like the internet.</p>
            <p>Digital handbooks are:</p>
            <ul>
              <li>easier to keep up to date and will always be more relevant,</li>
              <li>more accessible because I share them for free, and</li>
              <li>better designed for making content more accessible.</li>
            </ul>
            <h1>Get in touch</h1>
            <p>Do you want to have a short chat with me, or do you have any feedback on my handbooks? I work on the Wellington (GMT +13) time zone. Contact me at <a href="mailto:hey@ashlyn.app">hey@ashlyn.app</a></p>
          </div>
          <main className={styles.main}>
            <StickerCard />
          </main>
        <Footer />
      </div>

  
    )
  }
}


export default AboutPage

