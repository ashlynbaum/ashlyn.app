import React from 'react'
import { Link } from 'gatsby'
import styles from './navigation.module.css'

export default () => (
  <nav role="navigation">
    <ul className={styles.navigation}>
      <li className={styles.navigationItem}>
        <Link to="/">handbooks</Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/about/">about</Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/">articles</Link>
      </li>
    </ul>
  </nav>
)
