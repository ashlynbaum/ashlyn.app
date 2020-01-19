import React from 'react'
import { Link } from 'gatsby'
import styles from './next-page.module.css'


export default ({ nextPage }) => (
  <div className={styles.nextBody}>
  { nextPage &&
    <div className={styles.nextContent}>
        <p className={styles.label}>go to next page</p>
        <h2 className={styles.pageName}>{nextPage.Name}</h2>
        <div className={styles.description}>{nextPage.description}</div>
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
