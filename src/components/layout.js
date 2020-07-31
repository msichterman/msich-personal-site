import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Logo from "./logo"
import Navigation from "./navigation"
import ThemeToggle from "./ThemeToggle"

import "../assets/scss/style.scss"
import Footer from "./footer"

const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        siteTitle: title
      }
    }
  }
`

const Layout = ({ children, className }) => {
  const { site } = useStaticQuery(query)
  const { siteTitle } = site.siteMetadata

  return (
    <div className="primary-container">
      <Header>
        <Logo title={siteTitle} />
        <div className="flex">
          <ThemeToggle />
          <Navigation />
        </div>
      </Header>
      <main className={`container${className ? " " + className : ""}`}>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
