import logo from './logo.svg';
import './App.css';
import react from 'react';
import {Link, Route, BrowserRouter as Router} from 'react-router-dom'
import HomePage from './components/HomePage/HomePage';
import NavBar from './components/NavBar/NavBar';
import Socials from './components/Socials/Socials';

function App() {
  return (
    <Router>
      <NavBar />
      <Route path='/' exact component={HomePage} />
    </Router>
  );
}

export default App;
