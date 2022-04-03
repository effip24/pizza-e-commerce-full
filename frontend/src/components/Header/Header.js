import "./Header.css";

import Navigation from "../Navigation/Navigation.js";
import logo from "../../images/Logo.png";
import close from "../../images/close.png";
import menu from "../../images/menu.png";
import { useState } from "react";

const Header = ({ cartItems, isAdmin }) => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const handleMobileClick = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  return (
    <header className="header">
      <div className="header__container">
        <img className="header__logo" src={logo} alt="logo"></img>
        <Navigation isMobileOpen={isMobileOpen} cartItems={cartItems} isAdmin={isAdmin} />
        <img
          className="header__mobile"
          src={isMobileOpen ? close : menu}
          alt="mobile icon"
          onClick={handleMobileClick}
        ></img>
      </div>
    </header>
  );
};
export default Header;
