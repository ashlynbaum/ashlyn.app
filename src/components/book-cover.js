import React from 'react'
import styles from './book-cover.module.css'

export default () => (
<div className={styles.container}>
		<div className={styles.book}>
			<div className={styles.front}>
				<div className={styles.cover}>
                    <p className={styles.numUp}>here is some cover text</p>
				</div>
			</div>
			<div className={styles.leftSide}>
				<h2>
					<span>George Orwell</span>
					<span>1984</span>
				</h2>
			</div>
		</div>
	</div>

)