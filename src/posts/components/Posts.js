import React from 'react'
import PostFilters from './PostFilters'
import PostItem from './PostItem'
import styled from 'styled-components'

const PostList = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
`
const Posts = (props) => {
  const items = props.items.map(item => (
    <PostItem { ...item } key={item.id}/>
  ))
  return (
    <div>
      <PostFilters
        { ...props.filters }
        toggleFieldFilter={props.toggleFieldFilter}
        changeSearchFilter={props.changeSearchFilter}
      />
      <PostList>{items}</PostList>
    </div>
  )
}

export default Posts
