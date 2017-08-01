import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';

export default class HeaderNavbar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="faded" light toggleable>
          <NavbarToggler right onClick={this.toggle} />
          <NavbarBrand href="/">SMA</NavbarBrand>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink><Link to="/" style={{color: '#404040'}}>서비스 소개</Link></NavLink>
              </NavItem>
              <NavItem>
                <NavLink><Link to="/meetinglist" style={{color: '#404040'}}>회의 리스트</Link></NavLink>
              </NavItem>
              <NavItem>
                <NavLink><Link to="/" style={{color: '#404040'}}>회의 분석</Link></NavLink>
              </NavItem>
            </Nav>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink><Link to="/login" style={{color: '#404040'}}>로그인</Link></NavLink>
              </NavItem>
              <NavItem>
                <NavLink><Link to="/signup" style={{color: '#404040'}}>회원 가입</Link></NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
