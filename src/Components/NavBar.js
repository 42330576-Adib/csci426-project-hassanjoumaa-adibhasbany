import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/coffeeDoseLogo.jpg';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <Link to="/" className="navbar-brand" onClick={closeMenu}>
          <img
            src={logo}
            alt="Coffee Dose logo"
            className="navbar-logo"
          />
          <span className="brand-text">Coffee Dose</span>
        </Link>

        <button className="nav-toggle" onClick={toggleMenu}>
          ☰
        </button>

        <nav className={`nav-links ${isOpen ? 'nav-links-open' : ''}`}>
          <Link to="/" onClick={closeMenu}>Home</Link>
          <Link to="/about" onClick={closeMenu}>About</Link>
          <Link to="/services" onClick={closeMenu}>Services</Link>
          <Link to="/menu" onClick={closeMenu}>Menu</Link>
          <Link to="/contact" onClick={closeMenu}>Contact</Link>
        </nav>
      </div>
    </header>
  );
}

export default NavBar;
