import { Link } from 'react-router-dom';
import React from 'react';
import './NavItem.css';

const NavItem = ({ label, icon, to }) => {
  return (
    <div className="nav-item">
      {icon && <i className={`fa ${icon}`}></i>}
      <Link className="hover-btn" to={to}>{label}</Link>
    </div>
  );
}

export default NavItem;
