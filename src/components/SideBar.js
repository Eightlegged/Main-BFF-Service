import React, { Component } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';

import TeamLogo from '../img/TeamLogo.png';

class SideBar extends Component {
  render () {
    return(
      <Nav vertical style={{backgroundColor: "#404040", height: "100%"}}>
        <NavItem>
          <NavLink active><Link to="/meetinglist" style={{color: 'white'}}>회의 리스트</Link></NavLink>
        </NavItem>
        <NavItem>
          <NavLink><Link to="/SttTest" style={{color: 'white'}}>stt test</Link></NavLink>
        </NavItem>
        <NavItem>
          <NavLink>대시 보드</NavLink>
        </NavItem>
        <div style={{position: "absolute",  bottom: "10px", color: "white", textAlign: "center", paddingLeft: "10%"}}>
          <img className="Eightlegged-Logo" src={TeamLogo} style={{margin: "auto"}}/>
        </div>
      </Nav>
    );
  }
}

export default SideBar;
