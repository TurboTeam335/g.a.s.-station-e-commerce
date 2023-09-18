import { Link } from 'react-router-dom';
import React from 'react';
import './UserLinks.css';
import '../../index.css'

const UserLinks = () => {
  return (
    <div className="user-links">
      <Link to='/login' className='hover-btn'>Login/Signup</Link>
    </div>
  );
}

export default UserLinks;
