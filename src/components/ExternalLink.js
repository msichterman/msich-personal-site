import React from "react"

export const ExternalLink = ({ className, url, children }) => {
  return (
    <a
      className={className}
      href={url}
      target="_blank"
      rel="noreferrer noopener"
    >
      {children}
    </a>
  )
}
