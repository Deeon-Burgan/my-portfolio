import logo from './logo.svg';
import './App.scss';
import React from 'react';
import {Link, Route, BrowserRouter as Router} from 'react-router-dom'
import HomePage from './components/HomePage/HomePage';
import NavBar from './components/NavBar/NavBar';
import Socials from './components/Socials/Socials';
import Projects from './components/Projects/Projects';
import Project from './components/Projects/Project/Project';
import About from './components/About/About'

function App() {
  return (
    <Router>
      <NavBar />
      <Route path='/' exact component={HomePage} />
      <Route path='/projects' exact component={Projects} />
      <Route path='/project/:name' exact component={Project} />
      <Route path='/about' exact component={About} />
    </Router>
  );
}

export default App;
