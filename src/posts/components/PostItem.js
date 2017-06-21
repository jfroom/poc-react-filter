import React from 'react'
import styled from 'styled-components'

const StyleWrap = styled.div`
  min-width: 200px;
  border: 1px solid black;
  border-top-width: 4px;
  margin: 10px;
  padding-bottom: 30px;
  position: relative;
  border-radius: 3px;
  width: 200px;

  .content {
      padding: 20px;
  }
  .author {
      padding: 5px 20px;
      background: #aaa;
      position: absolute;
      bottom: 0;
      width: 100%;
  }
  .tags {
      position: absolute;
      right:0;
      bottom: 0;
      display: flex;
  }
  .tag {
      font-size: x-small;
      text-transform: uppercase;
      margin: 0;
      padding: 0 2px;
  }
  .tag-foo {
      background-color: #cfc;
  }
  .tag-bar {
      background-color: #fcc;
  }

  &.tw {
      border-top-color: #42cbf4;
  }
  &.ig {
      border-top-color: #d4d;
  }
  &.fb {
      border-top-color: #00d;
  }
`

const PostItem = (props) => {
  let tags = []
  if (props.tags) {
    tags = props.tags.map(tag => (
      <div className={`tag tag-${tag}`} key={tag}>{tag}</div>
    ))
  }
  return (
    <StyleWrap className={props.network}>
      <div className="content">{props.text}</div>
      <div className="author">{props.author}</div>
      <div className="tags">{tags}</div>
    </StyleWrap>
  )
}

export default PostItem
