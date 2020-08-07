import React from "react"

// Components
import { Link, graphql } from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/layout"
import { TagNoLink } from "../components/Tag"
import PostCard from "../components/post-card"
import { RiPriceTag3Line } from "react-icons/ri"

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allMdx
  // Filter only the "blog-post" template
  /// TODO: allow projects, etc.
  const posts = edges
    .filter(
      edge =>
        !!edge.node.frontmatter.date &&
        edge.node.frontmatter.template === "blog-post"
    )
    .map(edge => <PostCard key={edge.node.id} data={edge.node} />)

  const tagObject = { fieldValue: tag, totalCount }
  const tagHeader = `Results for Tag: ${tag}`

  return (
    <Layout className="page">
      <SEO title={tagHeader} />
      <div className="wrapper">
        <h1>
          Results for Tag: <TagNoLink tag={tagObject} />
        </h1>
        <h2 className="margin-top">Blog Posts</h2>
        <div className="grids col-1 sm-2 lg-3">{posts}</div>
        <Link to="/tags" className="button margin-top-2">
          All Tags{" "}
          <span className="icon -right">
            <RiPriceTag3Line />
          </span>
        </Link>
      </div>
    </Layout>
  )
}

export default Tags

export const pageQuery = graphql`
  query($tag: String) {
    allMdx(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            title
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 540, maxHeight: 360, quality: 80) {
                  ...GatsbyImageSharpFluid
                  ...GatsbyImageSharpFluidLimitPresentationSize
                }
              }
            }
            tags
            template
          }
        }
      }
    }
  }
`
