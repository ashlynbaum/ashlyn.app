import React from 'react'
import { Link } from 'gatsby'
import styles from './breadcrumb.module.css'

export default () => (
  <div className={styles.navigation}>
    <ul>
      <li>        
        <Link to={`/`}>
            ashlyn.app
        </Link>
      </li>
      <li>
        <Link to={`/product-handbook/welcome`}>
            Product Feature Development
        </Link>
        </li>
    </ul>
  </div>
)
