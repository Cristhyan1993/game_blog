import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link, NavLink } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

import './Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className='navbar-container'>
      <nav>
        <Link to="/" className="title">
        my-Gmz
        <i className="fa-solid fa-gamepad"/>
        </Link>
        <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={menuOpen ? "open" : ""}>
          <li>
            <NavLink to="/" onClick={() => setMenuOpen(!menuOpen)}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/aboutme" onClick={() => setMenuOpen(!menuOpen)}>About me</NavLink>
          </li>
          <li>
            <LinkScroll to='cards' spy={true} smooth={true} offset={-150} duration={500} onClick={() => setMenuOpen(!menuOpen)}>
              Games
            </LinkScroll>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;

