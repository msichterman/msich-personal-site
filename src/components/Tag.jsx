import React from "react"

// Utilities
import kebabCase from "lodash/kebabCase"
import ColorHash from "color-hash"

// Components
import { Link } from "gatsby"

var colorHash = new ColorHash({
  saturation: [1],
  lightness: [0.45],
})

export default function Tag({ tag }) {
  let fieldValue = tag.fieldValue ? tag.fieldValue : tag

  let color = colorHash.hex(fieldValue)

  return (
    <Link to={`/tags/${kebabCase(fieldValue)}/`}>
      <div
        className="tag"
        style={{
          color: color,
          backgroundColor: `${color}25`,
        }}
      >
        {fieldValue}{" "}
        {tag.totalCount && <div className="tag-count">{tag.totalCount}</div>}
      </div>
    </Link>
  )
}

export function TagNoLink({ tag }) {
  let fieldValue = tag.fieldValue ? tag.fieldValue : tag

  let color = colorHash.hex(fieldValue)

  return (
    <div
      className="tag no-link"
      style={{
        color: color,
        backgroundColor: `${color}25`,
      }}
    >
      {fieldValue}{" "}
      {tag.totalCount && <div className="tag-count">{tag.totalCount}</div>}
    </div>
  )
}
