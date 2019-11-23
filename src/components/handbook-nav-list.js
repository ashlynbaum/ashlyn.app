import React from 'react'
import HandbookNavItem from '../components/handbook-nav-item'
import styles from './navigation.module.css'

export default ({ handbookNavList }) => (
    <ul>
        {handbookNavList.map((item, i) => {
        return (
            <HandbookNavItem item={item.Name} link={item.url} key={item.url}/>
        )
        })}
    </ul>
)
