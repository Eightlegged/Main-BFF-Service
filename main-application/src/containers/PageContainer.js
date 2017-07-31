import React, { Component } from 'react';
import { Route } from 'react-router-dom'

import Introduce from '../components/Introduce';
import Login from '../components/Login';
import SignUp from '../components/SignUp'

import './PageContainer.css'

class PageContainer extends Component {
  render() {
    return (
        <div className="PageContainer">
          <Route exact path="/" component={Introduce}/>
          <Route path="/login" component={Login}/>
          <Route path="/signup" component={SignUp}/>
        </div>
    );
  }
}

export default PageContainer;
