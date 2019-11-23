import React from 'react'
import { Link } from 'gatsby'
import styles from './navigation.module.css'

export default ({ item, link, id }) => (
    <li key={item} >
        <Link 
            to={`${location.pathname}/../${link}`}
            partiallyActive={true}
        >
            {item}
        </Link>
    </li>
)
