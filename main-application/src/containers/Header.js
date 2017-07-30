import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

import HeaderButton from '../components/HeaderButton'
import HeaderNav from '../components/HeaderNav'

import './Header.css'

class Header extends Component{
  render() {
    return (
      <div className="Header">
        <Container fluid={true}>
          <Row>
            <Col md="6">
            </Col>
            <Col md="3">
            </Col>
            <Col md="3">
              <HeaderButton to="/login" name="로그인"/>{'  '}
              <HeaderButton to="/signup" name="회원가입"/>
            </Col>
          </Row>
              <h1>Smart Meeting Assistant</h1>
          <Row>
          </Row>
          <Row>
            <Col md="3">
              <HeaderNav/>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Header;
