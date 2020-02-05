import React from 'react'
import { Link } from 'gatsby'
import styles from './handbook-nav-list.module.css'

export default ({ item, link }) => {
    // console.log("path", link)
    return (
    <li>
        <Link to={`/product-handbook/${link}`} activeClassName={styles.active}>
            {item}
        </Link>
    </li>);
}
