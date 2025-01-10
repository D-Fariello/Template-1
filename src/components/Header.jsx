import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav className="main-nav">
        <Link to="/">
          <button className="button-nav"> Dalila Fariello </button>
        </Link>
        <a href="#projects">
          <button className="button-nav"> Projects </button>
        </a>
      </nav>
    </header>
  );
};

export default Header;
