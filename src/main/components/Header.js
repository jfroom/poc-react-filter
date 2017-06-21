// @flow
import React from 'react'
import { Navbar } from 'react-bootstrap'
import styled from 'styled-components'

const StyleWrap = styled.div`
.navbar.navbar-inverse {
  border-radius: 0;
  font-family: 'Roboto Slab', serif;
}
.navbar-header {
  float: left;
}
.navbar-right {
  float: right;
  margin-right: -15px;
}
`
const Header = () => (
  <StyleWrap>
    <Navbar bsStyle="inverse">
      <div className="navbar-header">
        <div className="navbar-brand">
          Post Filter POC
        </div>
      </div>
      <ul className="nav navbar-nav navbar-right">
        <li>
          <a href="https://github.com/jfroom/poc-react-filter"><small>Source</small></a>
        </li>
      </ul>
    </Navbar>
  </StyleWrap>
)

export default Header
