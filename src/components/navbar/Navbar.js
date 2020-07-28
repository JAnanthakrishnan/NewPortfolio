import React from 'react';
import './Navbar.css';
import Logo from '../logo/Logo';

const Navbar = () => {
  return (
    <div class='navbar' id='navbar'>
      <Logo />
      <a href='#!' class='btn btn-2'>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Home
      </a>
      <a href='#!' class='btn'>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Projects
      </a>
      <a href='#!' class='btn'>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        About
      </a>
    </div>
  );
};

export default Navbar;
