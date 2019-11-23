import React from 'react'
import { Link } from 'gatsby'
import styles from './navigation.module.css'

export default ({ item, link, id }) => (
    <li key={item} >
    {/* <div>{item}</div> */}
        <Link to={`/product-handbook/${link}`}>
                    {item}
        </Link>
    </li>
)
