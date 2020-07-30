import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import Img from 'gatsby-image'
import SVG from 'react-inlinesvg';
import Layout from '../components/layout'
import HandbookNavList from '../components/handbook-nav-list'
import { parseImageUrl } from 'notabase/src/utils'
import Breadcrumb from '../components/breadcrumb'
import styles from './handbook-page.module.css'
import Sticky from '@wicked_query/react-sticky'
import NextPage from '../components/next-page'
import About from '../components/footer-handbook'
import PageNav from '../components/responsive-page-nav'
import MetaImage from '../../static/ashlyn-handbook-meta.png'


class HandbookPageTemplate extends React.Component {
  constructor() {
    super();
    this.state = {
      offset: 0,
      offsetSecond: 0,

    };
  }

  render() {
    //product page only 
    // [todo]: if page is products use allProduct, else use handbook data
    const page = get(this.props, 'data.productPage.nodes[0]')
    const handbookNavList = get(this.props, 'data.productNav.nodes')
    // console.log('page context:', this.props.pageContext)
    // console.log('page', page)

    const coverImageUrl = parseImageUrl(page.Cover[0])

    return (
      
      <Layout location={this.props.location} >


        {/* <Helmet title={`${post.title} | ${siteTitle}`} /> */}
        {/* <Helmet title={`${page.Name}`} /> */}
        <Helmet>
            <title> {page.Name} | ashlyn.app | Handbooks</title>
            <meta name="description" content="Build great digital products. Ashlyn.app is the best resources for product operations and strategies to launch successful digital products." />
            <link rel="canonical" href="http://ashlyn.app" />
            <meta property="og:image" content={`https://ashlyn.app${MetaImage}`} />
            <link rel="icon" href="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/237/party-popper_1f389.png"></link>
        </Helmet>

        <Sticky offset={this.state.offset} subscribe={(props) => (this.setState({ offsetSecond: props.height + this.state.offset }))}>
        <Breadcrumb />
        </Sticky>


        {/* hero banner */}
        <div className={styles.hero}>
          <h1 className={styles.heroTitle}>{page.Name}</h1>
          {page.Cover && <img src={coverImageUrl} />}
          <div className={styles.subheading}>{page.Subheading}</div>
        </div>

        <PageNav handbookNavList={handbookNavList} offset={this.state.offsetSecond} />
        
        {/* <Sticky offset={this.state.offsetSecond}>
              <HandbookNavList handbookNavList={handbookNavList} />
        </Sticky> */}

        <div className={'container'}>
          <div className={styles.handbookBody}>
            <div 
              dangerouslySetInnerHTML={{
                __html: page.html,
              }}
            />
          </div>
        </div>

        {/* <h2 className="section-headline">{page.Name}</h2> */}
        {/* <div className={styles.handbookBody}>
          <div 
            dangerouslySetInnerHTML={{
              __html: page.html,
            }}
          />
        </div> */}

        <NextPage nextPage={this.props.pageContext.next} />
        <About />
      </Layout>
    )
  }
}

export default HandbookPageTemplate


export const pageQuery = graphql`
query HandbookById($id: String!) {
  productPage: allProduct(filter: {id: {eq: $id}}){
    nodes {
      Cover
      Name
      id
      url
      html
      Subheading
      description
    }
  }
  productNav: allProduct(sort: {fields: Order, order: ASC}) {
    nodes {
      Name
      url
    }
  }
}
`
