import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav className="main-nav">
        <NavLink>
          <img
            src="./public/images/Logo.png"
            alt="Dalila Logo"
            className="main-nav-logo-image"
          />
        </NavLink>
        <NavLink to="/sign-in" className="main-nav-item">
          <i className="fa fa-user-circle"></i>
          Sign In
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
