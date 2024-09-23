
import { Link as LinkScroll } from 'react-scroll';
import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

import './Navbar.css';

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const scrollWithOffset = (el, offset) => {
    const elementPosition = el.offsetTop - offset;
    window.scroll({
      top: elementPosition,
      left: 0,
      behavior: "smooth"
    });
  }
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">

            <img src="images/my-GmzLogo.png" alt="website logo" />
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/aboutme"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                About Me
              </NavLink>
            </li>
            <li className="nav-item">
              {/* <LinkScroll
                to='cards'
                spy={true} smooth={true} offset={-150} duration={500}
                activeClass="active-scroll"
                className="nav-links"
                onClick={handleClick}
              >
                Games
              </LinkScroll> */}
              <HashLink
                to="/#cards"
                className="nav-links"
                activeClassName="nav-links"
                scroll={el => scrollWithOffset(el, 80)}
                onClick={handleClick}
              >
                Games
              </HashLink>
            </li>

          </ul>
          <div className="nav-icon" onClick={handleClick}>
            {click ? (
              <span className="icon">
                <i className='fas fa-times' size="md" />{" "}
              </span>
            ) : (
              <span className="icon">
                <i className='fas fa-bars' />
              </span>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;