import "./PizzaCard.css";

import less from "../../images/less-icon.png";
import plus from "../../images/plus-icon.png";

import { useState } from "react";

const PizzaCard = ({ card, onAddToCart }) => {
  const [amount, setAmount] = useState(1);
  const [isInCart, setIsInCart] = useState(false);

  const handleAddToCart = () => {
    onAddToCart(card, amount);
    setAmount(1);
    setIsInCart(true);
  };

  const decreaseAmount = () => {
    if (amount - 1 <= 0) return;
    setAmount(amount - 1);
  };

  const increaseAmount = () => {
    setAmount(amount + 1);
  };

  return (
    <>
      <li className="pizza__item">
        <img className="pizza__img" src={card.url} alt="pizza"></img>
        <div className="pizza__info">
          <p className="pizza__name">{card.name}</p>
          <p className="pizza__text">{card.text}</p>
          <p className="pizza__price">{`${card.price}$`}</p>
        </div>

        <div className="pizza__amout-wrap">
          <img className="pizza__choose-amount" src={less} alt="less" onClick={decreaseAmount}></img>
          <p className="pizza__amout">{amount}</p>
          <img className="pizza__choose-amount" src={plus} alt="more" onClick={increaseAmount}></img>
        </div>
        <button className={`pizza__add ${isInCart ? "pizza__add_inactive" : ""}`} onClick={handleAddToCart}>
          ADD TO CART
        </button>
      </li>
    </>
  );
};
export default PizzaCard;
