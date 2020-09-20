import React from "react"
import { graphql } from "gatsby"

// Components
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { RiBookMarkLine } from "react-icons/ri"

export const pageQuery = graphql`
  query ReadingListQuery($id: String!) {
    mdx(id: { eq: $id }) {
      id
      body
      excerpt(pruneLength: 140)
      frontmatter {
        title
      }
    }
  }
`
const ReadingListPage = ({ data }) => {
  const { mdx } = data
  const { frontmatter, body, excerpt } = mdx

  return (
    <Layout className="page">
      <SEO title={`MSICH — ${frontmatter.title}`} description={excerpt} />
      <div className="wrapper">
        <h1>
          {frontmatter.title}{" "}
          <span className="icon -right">
            <RiBookMarkLine />
          </span>
        </h1>
        <div>
          <MDXRenderer>{body}</MDXRenderer>
        </div>
      </div>
    </Layout>
  )
}

export default ReadingListPage
