import React from "react";

const Header = () => {
  return (
    <header>
      <nav className="main-nav">
        {/* Anchor link to scroll to the top of the page */}
        <a href="#home">
          <button className="button-nav">Dalila Fariello</button>
        </a>

        {/* Anchor link to scroll to the Projects section */}
        <a href="#projects">
          <button className="button-nav">Projects</button>
        </a>
      </nav>
    </header>
  );
};

export default Header;
