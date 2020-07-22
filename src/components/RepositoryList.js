import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Octicon, { Law, Star } from "@githubprimer/octicons-react"
import GitHubButton from "react-github-btn"
import { RiExternalLinkLine } from "react-icons/ri"
import { ExternalLink } from "./ExternalLink"

const RepositoryHeader = ({ repo }) => {
  return (
    <div
      style={{
        display: `flex`,
        justifyContent: `space-between`,
        alignItems: `center`,
        fontSize: 14,
      }}
    >
      <h4
        style={{
          display: `flex`,
          justifyContent: `space-between`,
          margin: 0,
          fontSize: 20,
        }}
      >
        <ExternalLink url={repo.url}>{repo.name}</ExternalLink>
      </h4>
      <GitHubButton
        href={repo.url}
        data-icon="octicon-star"
        data-size="large"
        aria-label="Visit repo on GitHub"
      >
        Star
      </GitHubButton>
    </div>
  )
}

const FooterItem = ({ children }) => (
  <span style={{ marginRight: 16, whiteSpace: "nowrap" }}>{children}</span>
)

const RepositoryFooter = ({ repo }) => {
  let createdAt = new Intl.DateTimeFormat("en-US").format(
    Date.parse(repo.createdAt)
  )
  return (
    <div style={{ color: `#586069`, fontSize: 12 }}>
      <div style={{ margin: "1em 0" }}>
        {repo.languages.nodes &&
          repo.languages.nodes.map(language => {
            let color = language.color ? language.color : "#d9f2fe"
            return (
              <FooterItem key={language.id}>
                <span
                  style={{
                    borderRadius: `50%`,
                    display: `inline-block`,
                    height: 12,
                    position: `relative`,
                    top: 1,
                    width: 12,
                    backgroundColor: color,
                  }}
                />{" "}
                {language.name}
              </FooterItem>
            )
          })}
      </div>
      <FooterItem>
        <Octicon icon={Star} /> {repo.stargazers.totalCount}
      </FooterItem>
      {repo.licenseInfo && (
        <FooterItem>
          <Octicon icon={Law} /> {repo.licenseInfo.name}
        </FooterItem>
      )}
      <FooterItem>Created: {createdAt}</FooterItem>
    </div>
  )
}

const RepositoryDescription = ({ repo }) => (
  <div style={{ width: `75%` }}>
    <p style={{ color: `#586069`, marginBottom: 0 }}>
      {repo.description && repo.description}

      {repo.homepageUrl && (
        <>
          {" -"}{" "}
          <ExternalLink url={repo.homepageUrl}>
            <strong>
              See it Live <RiExternalLinkLine />
            </strong>
          </ExternalLink>
        </>
      )}
    </p>
  </div>
)

const Repository = ({ repo }) => {
  return (
    <div
      style={{
        borderBottom: `1px solid #e1e4e8`,
        padding: `0 1rem 1rem 1rem`,
        fontSize: 16,
      }}
    >
      <RepositoryHeader repo={repo} />
      <RepositoryDescription repo={repo} />
      <RepositoryFooter repo={repo} />
    </div>
  )
}

const RepositorySectionMaker = ({ data }) => (
  <>
    <div className="grids smd-2 col-1">{data}</div>
    <ExternalLink
      url="https://github.com/msichterman"
      className="button  margin-top"
    >
      See more on GitHub
    </ExternalLink>
  </>
)

export const RepositoryList = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          githubData {
            data {
              viewer {
                repositories {
                  nodes {
                    createdAt
                    description
                    id
                    name
                    url
                    homepageUrl
                    languages {
                      nodes {
                        color
                        name
                        id
                      }
                    }
                    licenseInfo {
                      name
                    }
                    stargazers {
                      totalCount
                    }
                  }
                }
              }
            }
          }
        }
      `}
      render={data => {
        const repos = data.githubData.data.viewer.repositories.nodes.map(
          repo => {
            return repo.name !== "msichterman" ? (
              <Repository key={repo.id} repo={repo} />
            ) : null
          }
        )
        return <RepositorySectionMaker data={repos} />
      }}
    />
  )
}
