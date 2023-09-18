import React from 'react';
import { Link } from 'react-router-dom'; 
import './Footer.css';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-links'>
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
      <div className='copyright-portfolio'>
        <span>© All rights reserved 2023</span>
        <a
          href='https://turboteam335.github.io/dm-portfolio/'
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
