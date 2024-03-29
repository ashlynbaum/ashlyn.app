import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import styles from './handbook-preview.module.css'

// old article-preview
// export default ({ article }) => (

//   <div className={styles.preview}>
//     <Img alt="" fluid={article.heroImage.fluid} />
//     <h3 className={styles.previewTitle}>
//       <Link to={`/blog/${article.slug}`}>{article.title}</Link>
//     </h3>
//     <small>{article.publishDate}</small>
//     <p
//       dangerouslySetInnerHTML={{
//         __html: article.description.childMarkdownRemark.html,
//       }}
//     />
//     {article.tags.map(tag => (
//       <p className={styles.tag} key={tag}>
//         {tag}
//       </p>
//     ))}
//   </div>
// )


// handbook preview
export default ({ handbook, name, description }) => (

  <div className={styles.preview}>
      
      <h2 className={styles.previewTitle}>{name}</h2>
      <div className={styles.headingAfter} />
      <p>{description}</p>
      
      <Link 
        to={`https://product-handbook.ashlyn.app/`}
      >
        <button className={styles.submitButton}>
        Read handbook
        </button>
      </Link>

    

    {/* <Img alt="" fluid={handbook.heroImage.fluid} /> */}
    {/* <h3 className={styles.previewTitle}>


    </h3> */}
    {/* <small>{handbook.publishDate}</small> */}
    {/* <p
      dangerouslySetInnerHTML={{
        __html: handbook.description.childMarkdownRemark.html,
      }}
    /> */}
    {/* {handbook.tags.map(tag => (
      <p className={styles.tag} key={tag}>
        {tag}
      </p>
    ))} */}
  </div>
)


// const ComponentName = ({ data }) => <pre>{JSON.stringify(data, null, 4)}</pre>



// export default HandbookPreview