import React from 'react';
import Logo from '../images/logos/PNG/DyneDollar_Logo_50x50px.png';
import NameLogo from '../images/logos/PNG/DyneDollar_name_logo.png';


const TopNavBar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="name-logo">
        <img src={NameLogo} alt="DyneDollar" />
      </div>
      <ul className="nav-links">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default TopNavBar;
