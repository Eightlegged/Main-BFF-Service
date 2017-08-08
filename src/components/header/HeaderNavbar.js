import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutRequest } from '../../actions/Authentication';

class HeaderNavbar extends React.Component {
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
            <NavLink><Link to="/login" style={{color: '#404040'}}>로그인</Link></NavLink>
          </NavItem>
          <NavItem>
            <NavLink><Link to="/signup" style={{color: '#404040'}}>회원 가입</Link></NavLink>
          </NavItem>
        </Nav>

      )
    }else{
      return (
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink><Link to='' onClick={this.handleLogout} style={{color: '#404040'}}>로그아웃</Link></NavLink>
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
    return this.props.logoutRequest().then(() => {
        if(this.props.authentication.logout.status === "SUCCESS") {
          let loginData = {
            isLoggedIn: false,
            email: ""
          }
          document.cookie = 'key=' + btoa(JSON.stringify(loginData));

          return (<Redirect to='/'/>);
        } else {
          alert('logout failed');
        }
      }
    );
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
                <NavLink><Link to="/SttTest" style={{color: '#404040'}}>stt test</Link></NavLink>
              </NavItem>
            </Nav>
              {this.renderAuthenicationButton()}
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        authentication: state.authentication
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        logoutRequest: () => {
            return dispatch(logoutRequest());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderNavbar);
