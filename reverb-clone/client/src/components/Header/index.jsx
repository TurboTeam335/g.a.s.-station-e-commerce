import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import SearchBar from './SearchBar';
import UserLinks from './UserLinks';
import Navbar from '../Navbar';
import HamburgerMenu from './HamburgerMenu'; 
import logo from '../../img/logo.png';

const Header = () => {
  const [isMobile, setMobile] = useState(window.innerWidth <= 860);
  const [showSearch, setShowSearch] = useState(false);

  const updateMedia = () => {
    setMobile(window.innerWidth <= 860);
  };

  useEffect(() => {
    window.addEventListener('resize', updateMedia);
    return () => window.removeEventListener('resize', updateMedia);
  }, []);

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  return (
    <div className='header'>
      <div className='top-section'>
        {isMobile ? (
          <>
            <div className='left-mobile-icons'>
              <i className='fas fa-search' onClick={toggleSearch}></i>
            </div>
            <div className='logo'>
              <Link to='/'>
                <img src={logo} alt='logo' />
              </Link>
            </div>
            <div className='right-mobile-icons'>
            <HamburgerMenu />
            </div>
            {showSearch && (
              <div className='mobile-search-bar-overlay'>
                <SearchBar />
              </div>
            )}
          </>
        ) : (
          <>
            <div className='logo'>
              <Link to='/'>
                <img src={logo} alt='logo' />
              </Link>
            </div>
            <SearchBar />
            <UserLinks />
          </>
        )}
      </div>
      {!isMobile && <Navbar />}
    </div>
  );
};

export default Header;
