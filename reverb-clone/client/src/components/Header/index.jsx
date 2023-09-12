import React from 'react';
import { Link } from 'react-router-dom'; 
import './Header.css';
import SearchBar from './SearchBar';
import UserLinks from './UserLinks';
import Navbar from '../Navbar';
import logo from '../../img/logo.png';

const Header = () => {
  return (
    <div className="header">
      <div className="top-section">
        <div className="logo">
          <Link to="/home">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <SearchBar />
        <UserLinks />
      </div>
      <Navbar />
    </div>
  );
}

export default Header;
