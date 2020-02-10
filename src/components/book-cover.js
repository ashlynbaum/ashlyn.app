import React from 'react'
import styles from './book-cover.module.css'

export default (isMobile) => (
    <div className={styles.container}>
		<div className={styles.book}>
			<div className={styles.front}>
				<div className={styles.cover}>
                    {/* <p className={styles.numUp}>here is some cover text</p> */}
                    {/* <h2 className={styles.author}>product feature development</h2> */}
                    <p className={styles.title}>product feature development</p>
				</div>

			</div>
			<div className={styles.leftSide}>
                <h2>
					<span>ashlyn.app</span>
                    <span>handbooks</span>
				</h2>
			</div>
		</div>
	</div>

)