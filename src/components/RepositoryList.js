import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Octicon, { Law } from "@githubprimer/octicons-react"
import GitHubButton from "react-github-btn"
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
        <ExternalLink url={`https://github.com${repo.resourcePath}`}>
          {repo.name}
        </ExternalLink>
      </h4>
      <GitHubButton
        href={`https://github.com${repo.resourcePath}`}
        data-icon="octicon-star"
        data-size="large"
        aria-label="Star repo on GitHub"
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
                    backgroundColor: language.color,
                  }}
                />{" "}
                {language.name}
              </FooterItem>
            )
          })}
      </div>
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
          <ExternalLink url={repo.homepageUrl}>{repo.homepageUrl}</ExternalLink>
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
  <div className="grids smd-2 col-1">{data}</div>
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
                    resourcePath
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
