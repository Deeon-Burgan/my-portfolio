import logo from './logo.svg';
import './App.scss';
import React from 'react';
import {Link, Route, BrowserRouter as Router} from 'react-router-dom'
import HomePage from './components/HomePage/HomePage';
import NavBar from './components/NavBar/NavBar';
import Socials from './components/Socials/Socials';
import Projects from './components/Projects/Projects';
import Project from './components/Projects/Project/Project';

function App() {
  return (
    <Router>
      <NavBar />
      <Route path='/' exact component={HomePage} />
      <Route path='/projects' exact component={Projects} />
      <Route path='/project/:name' exact component={Project} />
    </Router>
  );
}

export default App;
