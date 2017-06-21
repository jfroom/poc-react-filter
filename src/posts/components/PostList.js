import React, { Component } from 'react'
import { Row, Col, Well, Glyphicon, Button } from 'react-bootstrap'
import styled from 'styled-components'

const StyleWrap = styled.div`
  h3 {
    margin: 0;
  }
  .filters {
    .filter-title {
      text-transform: capitalize;
    }
    .form-group {
      margin-bottom: 0;
    }
    hr {
      margin: 10px 0;
    }
    .btn {
      margin-right: 5px;
    }
  }
`

class PostList extends Component {
  props: {

  }
  render() {

    const filterDecor = {
      network: {
        icon: 'globe',
      },
      author: {
        icon: 'user',
      },
      tags: {
        icon: 'tag'
      }
    }
    const filters = {
      network: ['fb', 'tw', 'ig'],
      author: ['me', 'you'],
      tags: ['foo', 'bar']
    }

    const filterJsx = Object.keys(filters).map((filter) => {
      const data = filters[filter]
      const buttons = data.map((item, idx) => (
        <Button key={`${filter}-${idx}`} bsStyle='default'>
          <Glyphicon glyph={filterDecor[filter].icon} />
          {' '}
          Test
        </Button>
      ))
      return (
        <div key={filter}>
          <hr/>
          <Row>
            <Col xs={2} className='filter-title'><strong>{filter}</strong></Col>
            <Col xs={10}>
              <form>
                <div className="form-group">
                  {buttons.map(btn => btn)}
                </div>
              </form>
            </Col>
          </Row>
        </div>
      )
    })
    return (
      <StyleWrap>
        <Well className="filters clearfix">
          <h3>Filters</h3>
          <hr/>

            {/* SEARCH */}
            <Row>
              <Col xs={12}>
                <form>
                  <div className="form-group">

                    <div className="input-group">
                      <div className="input-group-addon">
                        <Glyphicon glyph="search" />
                      </div>
                      <input type="text" className="form-control" id="search" placeholder="Search" />
                    </div>
                  </div>
                </form>
              </Col>
            </Row>

            {/* REST */}
            {filterJsx.map(jsx => jsx)}
        </Well>
      </StyleWrap>
    )
  }
}


export default PostList
