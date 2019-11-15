import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Hero from '../components/hero'
import Layout from '../components/layout'
import ArticlePreview from '../components/article-preview'

class RootIndex extends React.Component {
  render() {
    const handbooks = get(this, 'props.data.allSourceConfig.edges')

    return (
      <Layout location={this.props.location} >
        <div>
        <Helmet />
        <Hero/>
          <div className="wrapper">
            <h2 className="section-headline">Recent articles</h2>
            <ul className="article-list">
              {handbooks.map(({ node }) => {
                return (
                  <li key={node.id}>
                    <ArticlePreview handbook={node} />
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </Layout>
    )
  }
}

export default RootIndex

export const query = graphql`
  {
    allSourceConfig {
      edges {
        node {
          id
          name
        }
      }
    }
  }
`