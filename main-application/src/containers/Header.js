import React, { Component } from 'react';
import axios from 'axios';
import { Container } from 'reactstrap';

import HeaderNavbar from '../components/HeaderNavbar';

import './Header.css'

class Header extends Component{

  render() {
    return (
      <div>
        <HeaderNavbar/>
        <Container className="Header" fluid={true}>
              <h1>Smart Meeting Assistant</h1>
        </Container>
      </div>
    );
  }
}

export default Header;
