import React from 'react';
import { Scroll, ScrollProvider, ScrollLink } from 'react-skroll';
import './App.css';
import Landing from './components/landing/Landing';
import Navbar from './components/navbar/Navbar';
import Logo from './components/logo/Logo';
import Projects from './components/projects/Projects';
import About from './components/about/About';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <Logo />
        <Navbar />
        <div className='AppContainer'>
          <Landing />
          <Projects />
          <About />
        </div>
      </div>
    );
  }
}

export default App;
