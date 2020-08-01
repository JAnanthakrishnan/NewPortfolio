import React from 'react';
import './App.css';
import Landing from './components/landing/Landing';
import Navbar from './components/navbar/Navbar';
import Logo from './components/logo/Logo';
import Projects from './components/projects/Projects';
import About from './components/about/About';

class App extends React.Component {
  componentDidMount() {
    document
      .querySelector(':root')
      .style.setProperty('--vh', window.innerHeight / 100 + 'px');
  }
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
