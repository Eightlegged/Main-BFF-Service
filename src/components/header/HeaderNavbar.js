import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { Link, Redirect } from 'react-router-dom';

class HeaderNavbar extends Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  componentWillUpdate(nextProps, nextState) {
  };

  renderAuthenicationButton(){
    if(!this.props.authentication.status.isLoggedIn){
      return(
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink><Link to="/login" style={{color: 'white'}}>로그인</Link></NavLink>
          </NavItem>
          <NavItem>
            <NavLink><Link to="/signup" style={{color: 'white'}}>회원 가입</Link></NavLink>
          </NavItem>
        </Nav>

      )
    }else{
      return (
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink><Link to='' onClick={this.handleLogout} style={{color: 'white'}}>로그아웃</Link></NavLink>
          </NavItem>
        </Nav>

      );
    }
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  handleLogout() {
      let loginData = {
        isLoggedIn: false,
        email: ""
      }
      document.cookie = 'key=' + btoa(JSON.stringify(loginData));
      this.props.logoutRequest()
      return (<Redirect to='/'/>);
  }

  render() {
    return (
      <div>
        <Navbar style={{backgroundColor: "#404040"}} fixed="top" color="white" light toggleable>
          <NavbarToggler right onClick={this.toggle} />
          <NavbarBrand><Link to="/" style={{color: 'white'}}>SMA</Link></NavbarBrand>
          <Collapse isOpen={this.state.isOpen} navbar>

              {this.renderAuthenicationButton()}
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default HeaderNavbar;
