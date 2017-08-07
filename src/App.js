import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/header/Header';
import Footer from './components/footer/Footer'
import Introduce from './components/Introduce';
import Login from './components/Login';
import SignUp from './components/SignUp'
import Meeting from './components/meeting/Meeting'
import SttTest from './components/SttTest'

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header/>
          <div className="PageContainer">
            <div id="PagePadding"/>
            <Route exact path="/" component={Introduce}/>
            <Route path="/login" component={Login}/>
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

export default App;
