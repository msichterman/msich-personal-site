import React from "react"
import { Link } from "gatsby"

const Logo = props => (
  <div className="site-logo">
    <Link to="/">
      <h1 className="header-brand">{props.title}</h1>
    </Link>
  </div>
)

export default Logo
