import React, { Component } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { TabContent, TabPane, Card, CardText, CardBlock, CardTitle, CardSubtitle, Button, Breadcrumb } from 'reactstrap';
import classnames from 'classnames';
import MeetingKeyword from './MeetingKeyword';

class MeetingAnalysis extends Component {
  constructor(props) {
   super(props);

   this.toggle = this.toggle.bind(this);
   this.state = {
     activeTab: '1'
   };
 }

 toggle(tab) {
   if (this.state.activeTab !== tab) {
     this.setState({
       activeTab: tab
     });
   }
 }

  render(){
    return (
    <div style={{height: "95%"}}>
      <Card style={{height: "100%"}}>
        <CardBlock style={{height: "100%"}}>

          <Breadcrumb>Title</Breadcrumb>
          <CardText>hellloooooooo</CardText>
          <div style={{height: "80%", overflow: "auto"}}>
            <Nav tabs>
              <NavItem>
                <NavLink
                  className={classnames({ active: this.state.activeTab === '1' })}
                  onClick={() => { this.toggle('1'); }}
                >
                  Tab1
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: this.state.activeTab === '2' })}
                  onClick={() => { this.toggle('2'); }}
                >
                  Moar Tabs
                </NavLink>
              </NavItem>
            </Nav>
            <TabContent activeTab={this.state.activeTab} style={{height: "85%", overflow: "auto", borderBottom: "2px solid #eceeef", borderLeft: "1px solid #eceeef", borderRight: "1px solid #eceeef"}}>
              <TabPane tabId="1" >
                  <p>sadsssssssssssssssssssssss</p>
                  <p>sadsssssssssssssssssssssss</p>
                  <p>sadsssssssssssssssssssssss</p>
                  <p>sadsssssssssssssssssssssss</p>
                  <p>sadsssssssssssssssssssssss</p>
                  <p>sadsssssssssssssssssssssss</p>
                  <p>sadsssssssssssssssssssssss</p>
                  <p>sadsssssssssssssssssssssss</p>
                  <p>sadsssssssssssssssssssssss</p>
              </TabPane>
              <TabPane tabId="2">

              </TabPane>
            </TabContent>
          </div>
        </CardBlock>
      </Card>
    </div>
  );
  }
}

/*
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
*/

export default MeetingAnalysis;
