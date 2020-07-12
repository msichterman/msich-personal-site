import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { RiArrowRightSLine } from "react-icons/ri"

import Layout from "../components/layout"
import BlogListHome from "../components/blog-list-home"
import SEO from "../components/seo"

export const pageQuery = graphql`
  query HomeQuery($id: String!) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        tagline
        featuredImage {
          childImageSharp {
            fluid(
              maxWidth: 480
              maxHeight: 380
              quality: 80
              srcSetBreakpoints: [960, 1440]
            ) {
              ...GatsbyImageSharpFluid
            }
            sizes {
              src
            }
          }
        }
        cta {
          cta1Text
          cta1Link
          cta2Text
          cta2Link
        }
      }
    }
  }
`

const HomePage = ({ data }) => {
  const { mdx } = data // data.mdx holds your post data
  const { frontmatter, body } = mdx
  const Image = frontmatter.featuredImage
    ? frontmatter.featuredImage.childImageSharp.fluid
    : ""
  return (
    <Layout>
      <SEO />
      <div className="home-banner grids col-1 md-2">
        <div>
          <h1 className="title">{frontmatter.title}</h1>
          <p className="tagline">{frontmatter.tagline}</p>
          <div className="description">
            <MDXRenderer>{body}</MDXRenderer>
          </div>
          <div className="index-page-button-group">
            <Link to={frontmatter.cta.cta1Link} className="button">
              {frontmatter.cta.cta1Text}
              <span className="icon -right">
                <RiArrowRightSLine />
              </span>
            </Link>
            <Link to={frontmatter.cta.cta2Link} className="button">
              {frontmatter.cta.cta2Text}
              <span className="icon -right">
                <RiArrowRightSLine />
              </span>
            </Link>
          </div>
        </div>
        <div>
          {Image ? (
            <Img
              fluid={Image}
              alt={frontmatter.title + " - Featured image"}
              className="featured-image"
            />
          ) : (
            ""
          )}
        </div>
      </div>
      <BlogListHome />
    </Layout>
  )
}

export default HomePage
