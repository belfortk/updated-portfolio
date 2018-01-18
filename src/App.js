import React, { Component } from 'react';
import { HashRouter as Router, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Home from './components//Home/HomeComponent'
import PortfolioComponent from './components/Portfolio/PortfolioComponent';
import ProjectList from './components/ProjectList';
import projects from './Projects/projects';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={Home}/>
          <Route exact path='/projects' component={ProjectList}/>
          {projects().map((project, i) => {
            const path = `/projects/${project.url}`
            return (
              <Route key={i} path={path} component={() => <PortfolioComponent {...this.props} description={project.description} title={project.title} github={project.github} liveLink={project.liveLink} summary={project.summary} heroImg={project.heroImg} supportingImg1={project.supportingImg1} supportingImg2={project.supportingImg2} builtWith={project.builtWith}/>}/>
            );
          })}          
          </div>
        </Router>
    );
  }
}

export default App;
