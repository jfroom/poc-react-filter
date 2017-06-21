import React from 'react'
import Header from './Header'
import { PostsContainer } from '../../posts'
import { Grid, Row, Col } from 'react-bootstrap'
import styled from 'styled-components'

const StyleWrap = styled.div`
  font-family: 'Open Sans', Arial, sans-serif;
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Roboto Slab', serif;
  }
`
const App = () => (
  <StyleWrap>
    <Header />
    <Grid>
      <Row>
        <Col xs={12}>
          <PostsContainer />
        </Col>
      </Row>
    </Grid>
  </StyleWrap>
)
export default App
