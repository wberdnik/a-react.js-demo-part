import React from 'react';
import Phone from './phone/Phone';
import Navbar from './navbar/Navbar';

const Header = () => {
  return (
    <header className='header-wrapper'>
      <div className='header'>
        <Phone/>
        <Navbar/>
      </div>
    </header>
  );
};

export default Header;