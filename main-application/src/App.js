import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from './containers/Header';
import PageContainer from './containers/PageContainer'
import Footer from './containers/Footer'

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header/>
          <PageContainer/>
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
