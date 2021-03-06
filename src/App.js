import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginCheck, loginEnd, logoutEnd } from './actions/Authentication';

import HeaderContainer from './containers/HeaderContainer';
import Introduce from './components/Introduce';
import LoginContainer from './containers/LoginContainer';
import SignUpContainer from './containers/SignUpContainer';
import CreateMeetingContainer from './containers/CreateMeetingContainer';
import MeetingContainer from './containers/MeetingContainer';



class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      isLoggedIn: false
    }
    function getCookie(name) {
        var value = "; " + document.cookie;
        var parts = value.split("; " + name + "=");
        if (parts.length == 2) return parts.pop().split(";").shift();
    }

    let loginData = getCookie('key');

    if(typeof loginData === "undefined") return;
    if(this.props.logout.status == "END") return;

    loginData = JSON.parse(atob(loginData));

    if(!loginData.isLoggedIn) {
      return;
    }else{
      this.props.loginCheck(loginData.email, loginData.isLoggedIn, loginData.user_id);
      this.setState({
        isLoggedIn: loginData.isLoggedIn
      })
      return;
    }

  }

  componentDidUpdate(prevProps, prevState){
    if(this.props.login.status == 'SUCCESS'){
      this.props.loginEnd();
      this.setState({
        isLoggedIn: true
      })
    }
    if(this.props.logout.status == 'SUCCESS'){
      this.props.logoutEnd();
      this.setState({
        isLoggedIn: false
      })
    }
  }

  render() {
    return (
      <Router>
        <div id="wrapper">
          <HeaderContainer status={this.props.status}/>
          <div id="page-wrapper">
            <Route exact path="/" component={Introduce}/>
            <Route path="/login" render={() => (
              this.state.isLoggedIn ? (
                <Redirect to="/"/>
              ) : (
                <LoginContainer/>
              )
            )}/>
            <Route path="/signup" render={() => (
            this.state.isLoggedIn ? (
                <Redirect to="/"/>
              ) : (
                <SignUpContainer/>
              )
            )}/>
            <Route path="/meetinglist" render={() => (
            this.state.isLoggedIn ? (
                <MeetingContainer/>
              ) : (
                <Redirect to="/login"/>
              )
            )}/>
            <Route path="/create" render={() => (
            this.state.isLoggedIn ? (
                <CreateMeetingContainer/>
              ) : (
                <Redirect to="/login"/>
              )
            )}/>
          </div>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        login: state.authentication.login,
        status: state.authentication.status,
        logout: state.authentication.logout
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
      loginCheck: (email, password, user_id) => {
          return dispatch(loginCheck(email, password, user_id));
      },
      loginEnd: () => {
          return dispatch(loginEnd());
      },
      logoutEnd: () => {
          return dispatch(logoutEnd());
      }
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(App)
