import "./Menu.css";

import PizzaCard from "../../PizzaCard/PizzaCard";
import Preloader from "../../Preloader/Preloader";
import mainmenu from "../../../images/mainmenu.png";

const Menu = ({ menu, onAddToCart, isSearching }) => {
  return (
    <section className="menu">
      <div className="menu__top-container">
        <img className="menu__image" src={mainmenu} alt="menu"></img>
        <div className="menu__info-container">
          <h4 className="menu__title">Our Menu.</h4>
          <ul className="menu__info-list">
            <li className="menu__info-item">
              <i className="menu__info-icon menu__info-icon_type_location"></i>
              <p className="menu__info-text">2938 Arrowood Drive, Jacksonville, FL, USA</p>
            </li>
            <li className="menu__info-item">
              <i className="menu__info-icon menu__info-icon_type_phone"></i>
              <p className="menu__info-text">+1 (123) 12345</p>
            </li>
            <li className="menu__info-item">
              <i className="menu__info-icon menu__info-icon_type_mail "></i>
              <p className="menu__info-text">pizza@pizza.com</p>
            </li>
          </ul>
        </div>
      </div>

      {isSearching ? (
        <Preloader isSearching={isSearching} />
      ) : (
        <ul className="menu__list">
          {menu.map((card) => (
            <PizzaCard key={card._id} card={card} onAddToCart={onAddToCart} />
          ))}
        </ul>
      )}
    </section>
  );
};
export default Menu;
