import "./Navigation.css";
import { Link, useLocation } from "react-router-dom";
import cart from "../../images/cart.png";

const Navigation = ({ isMobileOpen, cartItems, isAdmin }) => {
  const location = useLocation();

  const isHome = location.pathname === "/";
  const isMenu = location.pathname === "/menu";
  const isContact = location.pathname === "/contact";
  const isOrder = location.pathname === "/order";
  const isAdminPanel = location.pathname === "/admin";

  return (
    <nav className="navigation">
      <div className="navigation__desktop">
        <ul className="navigation__list">
          <Link className={`navigation__item ${isHome ? "navigation__item_current" : ""}`} to="/">
            {" "}
            <i className="navigation__item-icon" style={{ display: `${isHome ? "block" : "none"}` }}></i>Home
          </Link>

          <Link className={`navigation__item ${isMenu ? "navigation__item_current" : ""}`} to="/menu">
            <i className="navigation__item-icon" style={{ display: `${isMenu ? "block" : "none"}` }}></i> Menu
          </Link>

          <Link className={`navigation__item ${isContact ? "navigation__item_current" : ""}`} to="/contact">
            <i className="navigation__item-icon" style={{ display: `${isContact ? "block" : "none"}` }}></i> Contact
          </Link>

          <Link className={`navigation__item ${isOrder ? "navigation__item_current" : ""}`} to="/order">
            <i className="navigation__item-icon" style={{ display: `${isOrder ? "block" : "none"}` }}></i> My Order
          </Link>

          <Link
            style={{ display: `${isAdmin ? "" : "none"}` }}
            className={`navigation__item ${isAdminPanel ? "navigation__item_current" : ""}`}
            to="/admin"
          >
            <i className="navigation__item-icon" style={{ display: `${isAdminPanel ? "block" : "none"}` }}></i> Admin
            Panel
          </Link>
        </ul>

        <div className="navigation__order-container">
          <div className="navigation__contact-container">
            <p className="navigation__contact-text">Call For Order</p>
            <p className="navigation__contact-number">1-123-000-000</p>
          </div>
          <div className="navigation__cart">
            <p className="navigation__cart-amount">{cartItems}</p>
            <Link className="navigation__cart-link" to="/cart">
              <img className="navigation__cart-icon" alt="cart icon" src={cart}></img>
            </Link>
          </div>
        </div>
      </div>

      <div className="navigation__mobile" style={{ display: `${isMobileOpen ? "flex" : ""}` }}>
        <ul className="navigation__list">
          <Link className={`navigation__item ${isHome ? "navigation__item_current" : ""}`} to="/">
            {" "}
            <i
              className="navigation__item-icon navigation__item-icon_type_mobile"
              style={{ display: `${isHome ? "block" : "none"}` }}
            ></i>
            Home
          </Link>

          <Link className={`navigation__item ${isMenu ? "navigation__item_current" : ""}`} to="/menu">
            <i
              className="navigation__item-icon navigation__item-icon_type_mobile"
              style={{ display: `${isMenu ? "block" : "none"}` }}
            ></i>{" "}
            Menu
          </Link>

          <Link className={`navigation__item ${isContact ? "navigation__item_current" : ""}`} to="/contact">
            <i
              className="navigation__item-icon navigation__item-icon_type_mobile"
              style={{ display: `${isContact ? "block" : "none"}` }}
            ></i>{" "}
            Contact
          </Link>

          <Link className={`navigation__item ${isOrder ? "navigation__item_current" : ""}`} to="/order">
            <i
              className="navigation__item-icon navigation__item-icon_type_mobile"
              style={{ display: `${isOrder ? "block" : "none"}` }}
            ></i>{" "}
            My Order
          </Link>

          <Link
            style={{ display: `${isAdmin ? "" : "none"}` }}
            className={`navigation__item ${isAdminPanel ? "navigation__item_current" : ""}`}
            to="/admin"
          >
            <i className="navigation__item-icon" style={{ display: `${isAdminPanel ? "block" : "none"}` }}></i> Admin
            Panel
          </Link>
        </ul>

        <div className="navigation__order-container">
          <div className="navigation__contact-container">
            <p className="navigation__contact-text">Call For Order</p>
            <p className="navigation__contact-number">1-123-000-000</p>
          </div>
          <div className="navigation__cart">
            <p className="navigation__cart-amount">{cartItems}</p>
            <Link className="navigation__cart-link" to="/cart">
              <img className="navigation__cart-icon" alt="cart icon" src={cart}></img>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navigation;
