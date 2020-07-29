import React from 'react';
import './App.css';
import Landing from './components/landing/Landing';
import Navbar from './components/navbar/Navbar';
import Logo from './components/logo/Logo';
import Projects from './components/projects/Projects';

function App() {
  return (
    <div className='App'>
      <Logo />
      <Navbar />
      <Landing />
      <Projects />
    </div>
  );
}

export default App;
