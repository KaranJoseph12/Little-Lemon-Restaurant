import React from 'react'
import logo from "../images/Logo .svg"
import { useState } from 'react';



const Nav = () => {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  }
  return (
    <nav className={`navbar ${menu ? "open": ""}`}>
      <a href="/">
        <img src={logo} alt="logo" />
      </a>

      {/* mobile navbar */}
      <div className='menu-icon' onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      {/* nav item */}
      <ul className={`nav-links ${menu ? "visible" : ""}`}> 
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">About</a>
        </li>
        <li>
          <a href="/">Menu</a>
        </li>
        <li>
          <a href="/">Reservation</a>
        </li>
        <li>
          <a href="/">Order Online</a>
        </li>
        <li>
          <a href="/">Login</a>
        </li>
      </ul>

    </nav>
  )
}

export default Nav