// src/components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <h3>Dashboard</h3>
      <ul className="sidebar-menu">
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/analytics">Analytics</Link></li>
        <li><Link to="/reports">Reports</Link></li>
        <li><Link to="/settings">Settings</Link></li>
        <li><Link to="/profile">Profile</Link></li>
      </ul>
    </div>
  );
}

export default Sidebar;
