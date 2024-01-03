import React from 'react';
import { Link } from 'react-router-dom'; 
import './Footer.css';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-links'>
        
        <h3>Gear</h3>
        <Link to='/guitars' className='footer-link'>
          Guitars
        </Link>
        <Link to='/amplifiers' className='footer-link'>
          Amplifiers
        </Link>
        <Link to='/pedals' className='footer-link'>
          Pedals
        </Link>
      </div>
        <div className='footer-links'>
        <h3>Information</h3>
        <Link to='/about-us' className='footer-link'>
          About Us
        </Link>
        <Link to='/contact' className='footer-link'>
          Contact
        </Link>
  
      </div>
      <div className='copyright-portfolio'>
        <span>© All rights reserved 2023</span>
        <a
          href='https://danielmascali.com'
          target='_blank'
          rel='noopener noreferrer'
          className='portfolio-link'
        >
          Site built by Daniel Mascali
        </a>
      </div>
    </div>
  );
};

export default Footer;
