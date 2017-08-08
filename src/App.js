import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginCheck } from './actions/Authentication';
import axios from 'axios';

import Header from './components/header/Header';
import Footer from './components/footer/Footer'
import Introduce from './components/Introduce';
import LoginContainer from './containers/LoginContainer';
import SignUp from './components/SignUp'
import Meeting from './components/meeting/Meeting'
import SttTest from './components/SttTest'


import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.props.loginCheck();
  }

  componentDidUpdate(prevProps, prevState){
    console.log(this.props.status);
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header status={this.props.status}/>
          <div className="PageContainer">
            <div id="PagePadding"/>
            <Route exact path="/" component={Introduce}/>
            <Route path="/login" component={LoginContainer}/>
            <Route path="/signup" component={SignUp}/>
            <Route path="/meetinglist" component={Meeting}/>
            <Route path="/SttTest" component={SttTest}/>
            <div id="PagePadding"/>
          </div>
          <Footer/>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        status: state.authentication.status
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
      loginCheck: () => {
          return dispatch(loginCheck());
      }
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(App)
