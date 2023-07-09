import React from 'react';
import { Link, useMatch } from 'react-router-dom';
import './Navbar.scss'

const NavbarLink = ({ to, children }) => {
  const match = useMatch(to);
  return (
    <Link
      className={`navbar-link ${match ? 'navbar-link-selected' : ''}`}
      to={to}
    >
      {children}
    </Link>
  );
};

const Navbar = () => {
  return (
    <nav className='game-navbar'>
      <div className='left-links'>
        <NavbarLink to='/career'>Jobs</NavbarLink>
        <NavbarLink to='/skills'>Skills</NavbarLink>
        <NavbarLink to='/market'>Market</NavbarLink>
        <NavbarLink to='/Roam'>Roam</NavbarLink>
        <NavbarLink to='/artifact'>Artifacts</NavbarLink>
      </div>
      <div className='right-links'>
        <NavbarLink to='/settings'>Settings</NavbarLink>
      </div>
    </nav>
  );
};

export default Navbar;
