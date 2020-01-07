import React from 'react'
import { Link } from 'gatsby'
import styles from './next-page.module.css'


export default ({ nextPage }) => (
  <div className={styles.nextBody}>
  { nextPage &&
    <div className={styles.nextContent}>
        <p>Next Page</p>
        <h2>{nextPage.Name}</h2>
        <Link 
            to={`/product-handbook/${nextPage.url}`}
        >
        <button className={styles.submitButton} >
            Next page
        </button>
      </Link>
    </div>
  }
  </div>
  
)
