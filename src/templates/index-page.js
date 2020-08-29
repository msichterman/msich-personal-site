import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import { MDXRenderer } from "gatsby-plugin-mdx"
import {
  RiBriefcase5Line,
  RiContactsLine,
  RiSendPlane2Line,
} from "react-icons/ri"

import Layout from "../components/layout"
import BlogListHome from "../components/blog-list-home"
import SEO from "../components/seo"
import { ExternalLink } from "../components/ExternalLink"

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
  const m = frontmatter.title.substring(0, 1)
  const att = frontmatter.title.substring(1, 4)
  const sich = frontmatter.title.substring(5, 9)
  const terman = frontmatter.title.substring(9)
  const Image = frontmatter.featuredImage
    ? frontmatter.featuredImage.childImageSharp.fluid
    : ""
  return (
    <Layout>
      <SEO />
      <div className="home-banner grids col-1 lg-2">
        <div className="hero-container">
          <h1 className="title">
            <span>{m}</span>
            {att} <span>{sich}</span>
            {terman}
          </h1>
          <p className="tagline">{frontmatter.tagline}</p>
          <div className="description">
            <MDXRenderer>{body}</MDXRenderer>
          </div>
          <div className="index-page-button-group">
            <Link to={frontmatter.cta.cta1Link} className="button">
              {frontmatter.cta.cta1Text}
              <span className="icon -right">
                <RiBriefcase5Line />
              </span>
            </Link>
            <Link to={frontmatter.cta.cta2Link} className="button">
              {frontmatter.cta.cta2Text}
              <span className="icon -right">
                <RiContactsLine />
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
      <div className="home-form-container">
        <div className="home-form-text">
          <h2>Get in Touch!</h2>
          <p>
            Looking for a mind to <strong>bounce ideas</strong> off of? Need a
            new <strong>website</strong> to accelerate your business? Let's get
            in contact.{" "}
            <span role="img" aria-label="phone">
              📲
            </span>{" "}
          </p>
          <p>
            Just send me a message using the form below or message me on{" "}
            <ExternalLink url="https://twitter.com/mattsichterman">
              Twitter
            </ExternalLink>
            .
          </p>
        </div>
        <form
          className="contact-form-home"
          action="/thanks"
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="contact" />
          <p>
            <label>
              Name
              <input type="text" name="name" required />
            </label>
          </p>
          <p>
            <label>
              Email
              <input type="email" name="email" required />
            </label>
          </p>
          <p>
            <label>
              Subject
              <input type="text" name="subject" required />
            </label>
          </p>
          <p>
            <label>
              Message<textarea name="message" required></textarea>
            </label>
          </p>
          <p className="text-align-right">
            <button className="button" type="submit">
              Send it
              <span className="icon -right">
                <RiSendPlane2Line />
              </span>
            </button>
          </p>
        </form>
      </div>
      <BlogListHome />
    </Layout>
  )
}

export default HomePage
