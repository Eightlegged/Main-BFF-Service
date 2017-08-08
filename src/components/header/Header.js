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
        <HeaderNavbar status={this.props.status}/>
        <Container className="Header" fluid={true}>
              <h1>Smart Meeting Assistant</h1>
        </Container>
      </div>
    );
  }
}

export default Header;
