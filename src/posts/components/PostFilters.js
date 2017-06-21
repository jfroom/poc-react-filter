import React, { Component } from 'react'
import { Row, Col, Well, Glyphicon, Button } from 'react-bootstrap'
import styled from 'styled-components'

const ICONS = {
  network: 'globe',
  author: 'user',
  tags: 'tag',
}

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

class PostFilters extends Component {
  onSearchChange(search) {
    this.props.changeSearchFilter(search)
  }
  onFilterClick(field, choice) {
    this.props.toggleFieldFilter(field, choice)
  }
  render() {
    const { fieldsChoices, fieldsChosen } = this.props

    // Create rows of buttons for each field type
    const fieldRows = Object.keys(fieldsChoices).map((field) => {
      const choices = fieldsChoices[field]
      const buttons = choices.map((choice, idx) => {
        const bsStyle = fieldsChosen[field].includes(choice) ? 'primary' : 'default'
        return (
          <Button
            key={`${choice}-${idx}`}
            bsStyle={bsStyle}
            onClick={(e) => {
              e.currentTarget.blur() // Removes blue outline around button after a click
              this.onFilterClick(field, choice)
            }}
          >
            <Glyphicon glyph={ICONS[field]} />
            {` ${choice}`}
          </Button>
        )
      })

      return (
        <div key={field}>
          <hr/>
          <Row>
            <Col xs={2} className='filter-title'>
              <strong>
                {field}
              </strong>
            </Col>
            <Col xs={10}>
              <form>
                <div className="form-group">
                  {buttons}
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
            {/* SEARCH ROW */}
            <Row>
              <Col xs={12}>
                <form>
                  <div className="form-group">

                    <div className="input-group">
                      <div className="input-group-addon">
                        <Glyphicon glyph="search" />
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        id="search"
                        placeholder="Search"
                        onChange={(e) => this.onSearchChange(e.currentTarget.value)}
                        value={this.props.search}
                      />
                    </div>
                  </div>
                </form>
              </Col>
            </Row>

            {/* FIELD ROWS */}
            {fieldRows}
        </Well>
      </StyleWrap>
    )
  }
}

export default PostFilters
