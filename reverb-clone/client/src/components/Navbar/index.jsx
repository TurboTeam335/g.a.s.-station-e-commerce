import React from 'react';
import './Navbar.css';
import NavItem from './NavItem';
import guitar from "./img/guitar.png"
import amp from "./img/amp.png"
import pedal from "./img/pedal.png"
import sell from "./img/sell.png"

const Separator = () => <span className="separator">|</span>;

const Navbar = () => {
  return (
    <div className="navbar">
      <NavItem label="Guitars" />
      <Separator />
      <NavItem label="Amplifiers" />
      <Separator />
      <NavItem label="Pedals" />
      <Separator />
      <NavItem label="Sell" />
      <Separator />
      <NavItem label="Wishlist" icon="fa-heart-o" />
      <Separator />
      <NavItem label="Cart" icon="fa-shopping-cart" />
    </div>
  );
}

export default Navbar;

