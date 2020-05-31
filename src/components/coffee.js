import React from 'react'
import { Link } from 'gatsby'
import styles from './coffee.module.css'


export default () => (
  <div  className={styles.coffee}>
      <div className={styles.border} />
    <div className={styles.wrap}>
      <div className={styles.header}>Like this handbook and want to see more?</div>
      <div className={styles.coffeeLink}>
        You can now <a href="https://www.buymeacoffee.com/ashlynapp" target="_blank"> get me a coffee</a>   🎉 
      </div>
    </div>

  </div>

)