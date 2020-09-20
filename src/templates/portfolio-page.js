import React from "react"
import { graphql } from "gatsby"

// Components
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { RiBriefcase5Line } from "react-icons/ri"

export const pageQuery = graphql`
  query PortfolioQuery($id: String!) {
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
const PortfolioPage = ({ data }) => {
  const { mdx } = data // data.mdx holds your post data
  const { frontmatter, body, excerpt } = mdx

  return (
    <Layout className="page">
      <SEO title={`MSICH — ${frontmatter.title}`} description={excerpt} />
      <div className="wrapper">
        <h1>
          {frontmatter.title}{" "}
          <span className="icon -right">
            <RiBriefcase5Line />
          </span>
        </h1>
        <div>
          <MDXRenderer>{body}</MDXRenderer>
        </div>
      </div>
    </Layout>
  )
}

export default PortfolioPage
