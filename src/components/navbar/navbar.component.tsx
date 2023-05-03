import React, { useEffect, useState } from "react";
import "./navbar.component.scss";
import Hamburger from "../../assets/icons/hamburger-menu.svg";
import Close from "../../assets/icons/close.svg";

const Navbar: React.FC<{ scrolled: boolean }> = ({ scrolled }) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen((prevState) => !prevState);
    console.log(open);
  };

  return (
    <>
      <header className={`header header__${scrolled ? "scroll" : ""}`}>
        <div className="header__container">
          <div className="header__logo"></div>
          <div className="header__links">
            <a href="" className="header__link">
              Home
            </a>
            <a href="#portfolio" className="header__link">
              Portfolio
            </a>
            <a href="" className="header__link">
              About
            </a>
            <a href="#contact" className="header__link">
              Contact
            </a>
            {open ? (
              <Close
                onClick={() => handleClick()}
                className="header__hamburger"
              />
            ) : (
              <Hamburger
                onClick={() => handleClick()}
                className="header__hamburger"
              />
            )}
          </div>
        </div>
      </header>
      {!open ? (
        ""
      ) : (
        <div className="header__mobile-menu">
          <a href="" className="header__mobile-link">
            Home
          </a>
          <a href="#portfolio" className="header__mobile-link">
            Portfolio
          </a>
          <a href="" className="header__mobile-link">
            About
          </a>
          <a href="#contact" className="header__mobile-link">
            Contact
          </a>
        </div>
      )}
    </>
  );
};

export default Navbar;
