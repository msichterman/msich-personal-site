import React from "react"

// Components
import Tag from "../components/Tag"

export default function TagList(props) {
  const tags = props.tags

  return (
    <div className="tag-list">
      {tags &&
        tags.map(tag => (
          <Tag key={tag?.fieldValue ? tag.fieldValue : tag} tag={tag} />
        ))}
    </div>
  )
}
