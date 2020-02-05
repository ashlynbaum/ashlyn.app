import React from 'react'
import styles from './footer.module.css'

export default () => (
  <div className={styles.footer}>
    <div className={styles.column}>
      <div className={styles.header}>Get in touch</div>
      <div className={styles.contactEmail}>
          <a href="mailto:hey@ashlyn.app?subject=I'm contacting you from your website">hey@ashlyn.app</a>  
      </div>
    </div>
  </div>

)