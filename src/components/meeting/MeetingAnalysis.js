import React, { Component } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import MeetingKeyword from './MeetingKeyword';

class MeetingAnalysis extends Component {


  render() {
    return (
      <Router>
      <div style={{border: "2px solid #eceeef"}}>
        <div style={{textAlign: 'center', height: 50, borderBottom: '2px solid #eceeef'}}>
          <h3>회의/세미나 분석 결과</h3>
        </div>
        <div style={{textAling: 'left', margin: 15}}>
        <p>일자 : --------------</p>
        <p>참석 인원 : xxxxxxxxxxxxxxxxx</p>
        <p>회의분석결과</p>
        </div>
        <div style={{height: 10}}>
        </div>
        <Nav style={{marginLeft: 20}}>
          <NavItem style={{border: "2px solid #eceeef"}}>
            <NavLink><Link to="/meetinglist/keyword" style={{color: 'black'}}>Keyword</Link></NavLink>
          </NavItem>
          <NavItem style={{border: "2px solid #eceeef"}}>
            <NavLink><Link to="/meetinglist/content" style={{color: 'black'}}>회의 내용</Link></NavLink>
          </NavItem>
          <NavItem style={{border: "2px solid #eceeef"}}>
            <NavLink><Link to="/meetinglist/article" style={{color: 'black'}}>관련 기사</Link></NavLink>
          </NavItem>
        </Nav>
        <div style={{height: 500, margin: 15, marginTop: 0, border: "1px solid #eceeef"}}>
          <Route path="/meetinglist/keyword" component={MeetingKeyword}/>
          <Route path="/meetinglist/content" component={MeetingKeyword}/>
          <Route path="/meetinglist/article" component={MeetingKeyword}/>
        </div>
      </div>
      </Router>
    );
  }
}

export default MeetingAnalysis;
