import React from 'react'
import ReactDOM from 'react-dom'
import { useSpring, animated } from 'react-spring'
import styles from './about.module.css'
import Layout from '../components/layout'
import Helmet from 'react-helmet'
import StickerCard from '../components/sticker-card.js'




class AboutPage extends React.Component {
  render() {
   
    return (
      <main className={styles.main}>
      <StickerCard />
      </main>
  
    )
  }
}


export default AboutPage

