import React, { Component } from 'react';
import { HashRouter as Router, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Home from './components//Home/HomeComponent'
import PortfolioComponent from './components/Portfolio/PortfolioComponent';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={Home}/>
          <Route path='/portfolio-sample' component={PortfolioComponent}/>          
          </div>
        </Router>
    );
  }
}

export default App;
