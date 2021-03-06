import React from 'react'
import { Link } from 'gatsby'
import styles from './footer-handbook.module.css'


export default () => (
  <div className={styles.footer}>
    <div className={styles.column}>
      <div className={styles.header}>Get in touch</div>
      <div className={styles.contactEmail}>
          <a href="mailto:hey@ashlyn.app?subject=I'm contacting you from your website">hey@ashlyn.app</a>  
      </div>
    </div>

    <div className={styles.column}>
      <div className={styles.header}>More</div>
      <ul className={styles.navigation}>
        <li className={styles.navigationItem}>
          <Link to="/">Handbooks</Link>
        </li>
        <li className={styles.navigationItem}>
          <Link to="/about/">About</Link>
        </li>
        <li className={styles.navigationItem}>
          <a href="https://medium.com/@ashlynbaum" target="_blank">Articles</a>
        </li>
      </ul>
    </div>
  </div>
      
  
)
