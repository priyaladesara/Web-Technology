import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="/yoga-logo.png" alt="KrushnamPriya Yog" className="logo-image" />
      </div>
      <ul className="navbar-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">Classes</a></li>
        <li><a href="#">Instructors</a></li>
        <li><a href="#">Schedule</a></li>
        <li><a href="#">About</a></li>
      </ul>
      <div className="navbar-auth">
        <button className="login-btn">Login</button>
      </div>
    </nav>
  );
}

export default Navbar;