import React, { Component } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';

class HeaderNav extends Component {
  

  render() {
    return (
      <Nav>
        <NavItem>
          <NavLink><Link to="/" style={{color: '#7DFFB8'}}>서비스 소개</Link></NavLink>
        </NavItem>
        <NavItem>
          <NavLink><Link to="/" style={{color: '#7DFFB8'}}>회의 리스트</Link></NavLink>
        </NavItem>
        <NavItem>
          <NavLink><Link to="/" style={{color: '#62AB83'}}>회의 분석</Link></NavLink>
        </NavItem>
      </Nav>
    );
  }
}

export default HeaderNav;
