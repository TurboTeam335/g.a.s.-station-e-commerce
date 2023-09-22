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
     <NavItem label="Guitars" to="/guitars" />
      <Separator />
      <NavItem label="Amplifiers" to="/amplifiers" />
      <Separator />
      <NavItem label="Pedals" to="/pedals" />
      <Separator />
      <NavItem label="Sell" to="/sell"/>
      <Separator />
      <NavItem label="Wishlist" icon="fa-heart-o" to="/wishlist"/>
      <Separator />
      <NavItem label="Cart" icon="fa-shopping-cart" to="/cart"/>
    </div>
  );
}

export default Navbar;

