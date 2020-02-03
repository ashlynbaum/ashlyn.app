import React from 'react'
import { Link } from 'gatsby'
import styles from './footer-handbook.module.css'


export default () => (
  <div className={styles.footer}>
    <div className={styles.column}>
      <div className={styles.header}>Get in touch</div>
      <div className={styles.contactEmail}>hey@ashlyn.app</div>
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
          <Link to="/">Articles</Link>
        </li>
      </ul>
    </div>
  </div>
      
  
)
