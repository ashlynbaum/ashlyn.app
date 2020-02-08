import React from 'react'
import HandbookNavItem from '../components/handbook-nav-item'
import styles from './handbook-nav-list.module.css'

export default ({ handbookNavList, isSmallScreen }) => (
  <div className={isSmallScreen ? styles.mobileNav : styles.bar}>
    <ul>
      <li>go to page -></li>
      {handbookNavList.map((item, i) => {
      return (
          <HandbookNavItem item={item.Name} link={item.url} key={item.url}/>
      )
      })}
    </ul>
  </div>
)
