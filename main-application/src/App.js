import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Header from './containers/Header';
import Introduce from './containers/Introduce';
import Login from './containers/Login';
import SignUp from './containers/SignUp'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Header/>
            <Route exact path="/" component={Introduce}/>
            <Route path="/login" component={Login}/>
            <Route path="/signup" component={SignUp}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
