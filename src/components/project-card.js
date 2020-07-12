import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

const ProjectCard = ({ data }) => (
  <Link to={data.frontmatter.slug}>
    {/* TODO: add project card class with similar to post-card formatting */}
    <article className="project-card">
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
      <div className="project-content">
        <h2 className="title">{data.frontmatter.title}</h2>
        <div className="dates">
          <time>{data.frontmatter.startdate}</time> -{" "}
          <time>{data.frontmatter.enddate}</time>
        </div>
        <Tags />
      </div>
    </article>
  </Link>
)

export default ProjectCard
