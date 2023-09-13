import React from 'react';
import './Navbar.css';
import NavItem from './NavItem';

const Separator = () => <span className="separator">|</span>;

const Navbar = () => {
  return (
    <div className="navbar">
      <NavItem label="Guitars" />
      <Separator />
      <NavItem label="Amps" />
      <Separator />
      <NavItem label="Pedals" />
      <Separator />
      <NavItem label="Wishlist" icon="fa-heart-o" />
      <Separator />
      <NavItem label="Cart" icon="fa-shopping-cart" />
    </div>
  );
}

export default Navbar;
