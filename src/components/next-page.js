import React from 'react'
import { Link } from 'gatsby'
import styles from './next-page.module.css'


export default ({ nextPage }) => (
  <div className={styles.nextBody}>
  { nextPage &&
    <div className={styles.nextContent}>
        <h3>Next Page</h3>
        <h2>{nextPage.Name}</h2>
        <Link 
            to={`/product-handbook/${nextPage.url}`}
        >
        <button >
            Next page ->
        </button>
      </Link>
    </div>
  }
  </div>
  
)
