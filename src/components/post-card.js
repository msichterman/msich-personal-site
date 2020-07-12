import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

const PostCard = ({ data }) => (
  <Link to={data.frontmatter.slug}>
    <article className="post-card">
      {data.frontmatter.featuredImage ? (
        <Img
          fluid={data.frontmatter.featuredImage.childImageSharp.fluid}
          objectFit="cover"
          objectPosition="50% 50%"
          alt={data.frontmatter.title + " - Featured image"}
          className="featured-image"
        />
      ) : (
        ""
      )}
      <div className="post-content">
        <h2 className="title">
          {data.frontmatter.title}
        </h2>
        <p className="meta">
          <time>{data.frontmatter.date}</time> - Matt Sichterman
        </p>
      </div>
    </article>
  </Link>
)

export default PostCard
