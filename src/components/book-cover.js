import React from 'react'
import styles from './book-cover.module.css'

export default () => (
    <ul className={styles.bookOuter}>
        <li>
        <div className={styles.bookInner}>
            <div className={styles.front}>
                <div className={styles.coverBack} />
                <div className={styles.cover}>
                <div className={styles.coverAfter} />
                <h2>
                    <span>Anthony Burghiss</span>
                    <span>A Catwork Orange</span>
                </h2>
                </div>
            </div>
            <div className={styles.frontAfter} />
            <div clasName={styles.back}>
				{/* <p>Tyrant, blackmailer, racketeer, murderer - his influence reaches every level of American society. Meet Cat Corleone, a friendly cat, a just cat, a reasonable cat. The deadliest lord of the Cata Nostra. The Catfather.</p> */}
			</div>
            <div className={styles.backAfter} />
            <div className={styles.right} />
            <div className={styles.left}>
                {/* <h2 className={styles.leftTitle}>
                <span>Anthony Burghiss</span>
                <span>A Catwork Orange</span>
                </h2> */}
            </div>
            <div className={styles.top} />
            <div className={styles.bottom} />
        </div>
        </li>
    </ul>

)