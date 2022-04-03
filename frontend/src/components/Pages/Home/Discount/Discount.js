import "./Discount.css";

import PizzaCard from "../../../PizzaCard/PizzaCard";
import Preloader from "../../../Preloader/Preloader";

import discount from "../../../../images/discount.png";
import scissors from "../../../../images/icon-scissor.png";
import scissorsRight from "../../../../images/icon-scissor-right.png";
import pizzaOne from "../../../../images/pizza1.png";
import pizzaTwo from "../../../../images/pizza2.png";
import separator from "../../../../images/Separator.png";

const Discount = ({ discountPizzas, onAddToCart, isSearching }) => {
  return (
    <section className="discount">
      <div className="discount__offer-container">
        <div className="discount__offer-code-wrap">
          <img className="discount__offer-icon" src={discount} alt="icon"></img>
          <p className="discount__offer-code">BF050</p>
        </div>
        <p className="discount__offer-text">Get $10 discount from orders above $40 </p>
        <img className="discount__icon-scissors-right" src={scissors} alt="scissors"></img>
        <img
          className="discount__icon-scissors discount__icon-scissors_type_right"
          src={scissorsRight}
          alt="scissors"
        ></img>
      </div>

      <div className="discount__special-container">
        <div className="discount__special">
          <img className="discount__special-image" src={pizzaOne} alt="special"></img>
          <h2 className="discount__special-title">
            4th July <br></br> <span className="discount__special-title-bold">Special Pizza Party</span>
          </h2>
          <p className="discount__special-text">Get Free Home Delivery Today</p>
        </div>

        <div className="discount__special">
          <img className="discount__special-image" src={pizzaTwo} alt="special"></img>
          <h2 className="discount__special-title">
            10% Off <br></br> <span className="discount__special-title-bold">Evert Pizza Today</span>
          </h2>
          <p className="discount__special-text">Get Free Home Delivery Today</p>
        </div>
      </div>

      <div className="discount__week-container">
        <div className="discount__week-title-wrap">
          <h3 className="discount__week-title">Weekly Pizza Offer</h3>
          <img className="discount__week-cover" src={separator} alt="cover"></img>
        </div>

        {isSearching ? (
          <Preloader isSearching={isSearching} />
        ) : (
          <ul className="discount__week-list">
            {discountPizzas.map((card) => (
              <PizzaCard key={card._id} card={card} onAddToCart={onAddToCart} />
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};
export default Discount;
