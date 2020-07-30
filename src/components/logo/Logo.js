import React from 'react';
import ak from './ak.webp';
import './Logo.css';
const Logo = () => {
  return (
    <div className='logo' id='ak_logo'>
      <img src={ak} alt='ak.svg' width='80px' />
    </div>
  );
};

export default Logo;
