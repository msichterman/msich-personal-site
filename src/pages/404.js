import React from "react"
import { Link } from "gatsby"
import { RiArrowLeftSLine, RiBugLine, RiSkullLine } from "react-icons/ri"

import SEO from "../components/seo"
import Layout from "../components/layout"

const NotFound = () => (
  <Layout className="not-found-page">
    <SEO title="Page not found" />
    <div
      className="wrapper"
      style={{
        textAlign: "center",
      }}
    >
      <header>
        <RiSkullLine
          style={{
            fontSize: "128px",
            color: "var(--electric-blue)",
          }}
        />
        <h1>Oops, that page does not exist</h1>
        <p>
          You have wandered into the unknown! Let me help you, take a look at
          the options below{" "}
          <span role="img" aria-label="arrow down">
            ⬇️
          </span>
        </p>
      </header>
      <div className="flex-container">
        <Link to="/" className="button">
          <RiArrowLeftSLine className="icon -left" />
          Back to Homepage
        </Link>
        <Link to="/contact" className="button -outline">
          Report this <RiBugLine className="icon -right" />
        </Link>
      </div>
    </div>
  </Layout>
)

export default NotFound
