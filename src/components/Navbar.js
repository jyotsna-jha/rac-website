import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './NavbarStyles.css';
import logo from '../assets/RAC-logo.png';

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <div className={`hamburger-icon ${showLinks ? 'active' : ''}`} onClick={toggleLinks}>
        {showLinks ? <FaTimes /> : <FaBars />}
      </div>
      <ul className={`nav-links ${showLinks ? 'active' : ''}`}>
        <li className="nav-link">
          <NavLink to="/" exact activeClassName="active">
            Home
          </NavLink>
        </li>
        <li className="nav-link">
          <NavLink to="/about" activeClassName="active">
            About
          </NavLink>
        </li>
        <li className="nav-link">
          <NavLink to="/ourteam" activeClassName="active">
            Our Team
          </NavLink>
        </li>
        <li className="nav-link">
          <NavLink to="/projects" activeClassName="active">
            Projects
          </NavLink>
        </li>
        <li className="nav-link">
          <NavLink to="/alumni" activeClassName="active">
            Alumni
          </NavLink>
        </li>
        <li className="nav-link">
          <NavLink to="/workshops" activeClassName="active">
            Workshops
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
