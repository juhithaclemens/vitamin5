import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2 className="navbar-logo">My Website</h2>
      <ul className="navbar-links">
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/nothome">Not Home</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
