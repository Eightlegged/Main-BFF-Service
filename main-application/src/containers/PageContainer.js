import React, { Component } from 'react';
import { Route } from 'react-router-dom'

import Introduce from '../components/Introduce';
import Login from '../components/Login';
import SignUp from '../components/SignUp'
import MeetingListPage from '../components/MeetingListPage'

import './PageContainer.css'

class PageContainer extends Component {
  render() {
    return (
        <div className="PageContainer">
          <div id="PagePadding"/>
          <Route exact path="/" component={Introduce}/>
          <Route path="/login" component={Login}/>
          <Route path="/signup" component={SignUp}/>
          <Route path="/meetinglist" component={MeetingListPage}/>
        </div>
    );
  }
}

export default PageContainer;
