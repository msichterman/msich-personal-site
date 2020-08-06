import React from "react"
import PropTypes from "prop-types"

// Utilities
import kebabCase from "lodash/kebabCase"
import ColorHash from "color-hash"

// Components
import { Link, graphql } from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/layout"

var colorHash = new ColorHash()

const Tags = ({
  data: {
    allMdx: { group },
    site: {
      siteMetadata: { title },
    },
  },
}) => (
  <Layout className="page">
    <SEO title={title} />
    <div className="wrapper">
      <h1>Tags</h1>
      <div className="tag-list">
        {group.map(tag => (
          <Link key={tag.fieldValue} to={`/tags/${kebabCase(tag.fieldValue)}/`}>
            <div
              className="tag"
              style={{ background: colorHash.hex(tag.fieldValue) }}
            >
              {tag.fieldValue} <div className="tag-count">{tag.totalCount}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </Layout>
)

Tags.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      group: PropTypes.arrayOf(
        PropTypes.shape({
          fieldValue: PropTypes.string.isRequired,
          totalCount: PropTypes.number.isRequired,
        }).isRequired
      ),
    }),
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }),
    }),
  }),
}

export default Tags

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
