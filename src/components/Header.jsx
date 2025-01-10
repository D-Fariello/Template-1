import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav className="main-nav">
        <Link>
          <button className="button-nav"> Dalila Fariello </button>
        </Link>
        <Link>
          <button className="button-nav"> Projects </button>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
