import React, { useEffect, useRef, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Logo from '../Logo';
import '../styles/Navbar.css';
import '../styles/style.css';

const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    setMenuOpen(false); // close menu on route change
  }, [location.pathname]);

  useEffect(() => {
    const handleSoftGlitchRefresh = (e) => {
      const el = e.target;
      if (el.classList.contains('active')) {
        el.classList.remove('glitch-soft');
        void el.offsetWidth;
        el.classList.add('glitch-soft');
      }
    };

    const links = document.querySelectorAll('a.glitch-soft');
    links.forEach(link => {
      link.addEventListener('mouseenter', handleSoftGlitchRefresh);
    });

    return () => {
      links.forEach(link => {
        link.removeEventListener('mouseenter', handleSoftGlitchRefresh);
      });
    };
  }, [location.pathname]);

  return (
    <nav className="navbar" ref={navRef}>
      <Logo />
      <div
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
      >
        <span />
        <span />
        <span />
      </div>
      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <li>
          <NavLink
            to="/studio"
            end
            className={({ isActive }) => isActive ? 'glitch-soft active' : 'glitch-fast'}
          >
            STUDIO.
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/projects"
            className={({ isActive }) => isActive ? 'glitch-soft active' : 'glitch-fast'}
          >
            MISC.
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) => isActive ? 'glitch-soft active' : 'glitch-fast'}
          >
            CONTACT.
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
