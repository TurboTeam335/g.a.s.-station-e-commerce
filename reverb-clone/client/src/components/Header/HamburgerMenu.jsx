import React, { useState } from 'react';
import Navbar from '../Navbar';
import UserLinks from './UserLinks';
import './HamburgerMenu.css';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button onClick={toggleMenu} className="hamburger-button">
        ☰
      </button>
      <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
        <div className="navbar-container">
          <Navbar />
        </div>
        <div className="user-links-container">
          <UserLinks />
        </div>
      </div>
    </>
  );
};

export default HamburgerMenu;
