import React from 'react';
import './NavItem.css';

const NavItem = ({ label, icon }) => {
  return (
    <div className="nav-item">
      {icon && <i className={`fa ${icon}`}></i>}
      <a className="hover-btn" href="#">{label}</a>
    </div>
  );
}

export default NavItem;
