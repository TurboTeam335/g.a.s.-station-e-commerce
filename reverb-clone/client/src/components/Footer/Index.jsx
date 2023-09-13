import React from 'react';
import './Footer.css';
import NavItem from '../Navbar/NavItem';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-links'>
        <NavItem label='Guitars' />
        <NavItem label='Amplifiers' />
        <NavItem label='Pedals' />
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
