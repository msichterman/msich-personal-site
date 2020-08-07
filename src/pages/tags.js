import React from "react"
import PropTypes from "prop-types"

// Components
import { graphql } from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/layout"
import TagList from "../components/TagList"
import { RiPriceTag3Line } from "react-icons/ri"

const TagsPage = ({
  data: {
    allMdx: { group },
  },
}) => (
  <Layout className="page">
    <SEO title="Tags" />
    <div className="wrapper">
      <h1>
        Tags{" "}
        <span className="icon -left">
          <RiPriceTag3Line />
        </span>
      </h1>
      <p>
        Choose a tag below to filter content by the topic that you are looking
        for!
      </p>
      <hr></hr>
      <TagList tags={group} />
    </div>
  </Layout>
)

TagsPage.propTypes = {
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

export default TagsPage

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
