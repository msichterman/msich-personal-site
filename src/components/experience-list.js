import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { RiArrowRightCircleLine } from "react-icons/ri"
import { ExternalLink } from "./ExternalLink"

const ExperienceCard = ({ data }) => (
  <div className="experience-card">
    {/* Featured image */}
    <Img
      fluid={data.frontmatter.backgroundImage.childImageSharp.fluid}
      style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: "100%",
        height: "100%",
      }}
    />
    <div
      className="overlay"
      style={{
        background: `${data.frontmatter.overlayColor}`,
      }}
    ></div>
    <Img
      fixed={data.frontmatter.companyLogo.childImageSharp.fixed}
      objectPosition="50% 50%"
      alt={data.frontmatter.title + " - Logo"}
      className="company-logo"
      style={{
        overflow: "visible",
        position: "absolute",
        left: "50%",
        marginLeft: "-125px",
      }}
    />
    {/* Company Name */}
    <h3>{data.frontmatter.company}</h3>
    <p className="job-title">
      <strong>{data.frontmatter.jobTitle}</strong>
    </p>
    <p className="dates">
      {data.frontmatter.startDate} - {data.frontmatter.endDate}
    </p>
    {/* Experience description */}
    <p className="description">{data.frontmatter.description}</p>
    {/* URL to the company */}
    <ExternalLink className="button" url={data.frontmatter.website}>
      Company website
      <span className="icon -right">
        <RiArrowRightCircleLine />
      </span>
    </ExternalLink>
  </div>
)

const ExperienceSectionMaker = ({ data }) => (
  <div className="grids col-1 smd-2">{data}</div>
)

export const ExperienceList = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          allMdx(
            filter: {
              fields: { collection: { eq: "component-content/experiences" } }
            }
          ) {
            edges {
              node {
                id
                frontmatter {
                  company
                  jobTitle
                  startDate
                  endDate
                  description
                  website
                  overlayColor
                  companyLogo {
                    childImageSharp {
                      fixed(width: 250, quality: 100) {
                        ...GatsbyImageSharpFixed
                      }
                    }
                  }
                  backgroundImage {
                    childImageSharp {
                      fluid(quality: 80) {
                        ...GatsbyImageSharpFluid
                        ...GatsbyImageSharpFluidLimitPresentationSize
                      }
                    }
                  }
                }
              }
            }
          }
        }
      `}
      render={data => {
        const cards = data.allMdx.edges.map(edge => (
          <ExperienceCard key={edge.node.id} data={edge.node} />
        ))
        return <ExperienceSectionMaker data={cards} />
      }}
    />
  )
}
