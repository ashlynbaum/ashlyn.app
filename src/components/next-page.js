import React from 'react'
import { Link } from 'gatsby'
import styles from './next-page.module.css'
import Coffee from '../components/coffee'


export default ({ nextPage }) => (
  <div className={styles.nextBody}>
    <div className={"container"}>
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
      <div className={styles.nextContent}>
        <Coffee />
      </div>
    </div>
  </div>
)
