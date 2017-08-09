import React, { Component } from 'react';
import { Container } from 'reactstrap';

import HeaderNavbar from './HeaderNavbar';

import './Header.css'

class Header extends Component{
  constructor(props){
    super(props);

  }

  render() {
    return (
      <div>
        <HeaderNavbar authentication={this.props.authentication} logoutRequest={this.props.logoutRequest} />
        <Container className="Header" fluid={true}>
              <h1>Smart Meeting Assistant</h1>
        </Container>
      </div>
    );
  }
}

export default Header;
