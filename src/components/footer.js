import React from "react"
import { FaTwitterSquare, FaLinkedin, FaGithubSquare } from "react-icons/fa"
import { ExternalLink } from "./ExternalLink"

const Footer = () => (
  <footer className="site-footer">
    <div className="copyright">
      <p>© 2020 Matt Sichterman</p>
    </div>
    <div className="icon-container">
      <ExternalLink url="https://twitter.com/mattsichterman">
        <span className="icon">
          <FaTwitterSquare />
        </span>
      </ExternalLink>
      <ExternalLink url="https://www.linkedin.com/in/msichterman">
        <span className="icon">
          <FaLinkedin />
        </span>
      </ExternalLink>
      <ExternalLink url="https://github.com/msichterman">
        <span className="icon">
          <FaGithubSquare />
        </span>
      </ExternalLink>
    </div>
  </footer>
)

export default Footer
