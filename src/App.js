import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginCheck } from './actions/Authentication';

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

    function getCookie(name) {
        var value = "; " + document.cookie;
        var parts = value.split("; " + name + "=");
        if (parts.length == 2) return parts.pop().split(";").shift();
    }

    let loginData = getCookie('key');

    if(typeof loginData === "undefined") return;

    loginData = JSON.parse(atob(loginData));

    if(!loginData.isLoggedIn) {
      return;
    }else{
      console.log(loginData);
      this.props.loginCheck(loginData.email, loginData.isLoggedIn);
      return;
    }
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
      loginCheck: (email, password) => {
          return dispatch(loginCheck(email, password));
      }
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(App)
