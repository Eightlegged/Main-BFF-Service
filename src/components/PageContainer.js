import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Introduce from './Introduce';
import Login from './Login';
import SignUp from './SignUp'
import Meeting from './meeting/Meeting'
import SttTest from './SttTest'

import './PageContainer.css'

class PageContainer extends Component {
  render() {
    return (
        <div className="PageContainer">
          <div id="PagePadding"/>
          <Route exact path="/" component={Introduce}/>
          <Route path="/login" component={Login}/>
          <Route path="/signup" component={SignUp}/>
          <Route path="/meetinglist" component={Meeting}/>
          <Route path="/SttTest" component={SttTest}/>
          <div id="PagePadding"/>
        </div>
    );
  }
}

export default PageContainer;
