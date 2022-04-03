import "./CartCard.css";

import less from "../../../../images/less-icon.png";
import plus from "../../../../images/plus-icon.png";
import remove from "../../../../images/remove.png";
import { useState } from "react";

const CartCard = ({ card, onUpdateCart, onRemoveFromCart }) => {
  const [amount, setAmount] = useState(card.amount);
  const [price, setPrice] = useState(parseInt(card.pizza.price) * parseInt(card.amount));

  const decreaseAmount = () => {
    if (amount - 1 <= 0) return;
    setAmount(amount - 1);
    setPrice(() => parseInt(card.pizza.price) * (amount - 1));
    onUpdateCart(card, amount - 1);
  };

  const increaseAmount = () => {
    setAmount(amount + 1);
    setPrice(() => parseInt(card.pizza.price) * (amount + 1));
    onUpdateCart(card, amount + 1);
  };

  const handleRemoveFromCart = () => {
    onRemoveFromCart(card);
  };

  return (
    <>
      <li className="cart-card__item">
        <div className="cart-card__pizza-info">
          <img className="cart-card__pizza-img" src={card.pizza.url} alt="pizza"></img>
          <p className="cart-card__pizza-name">{card.pizza.name}</p>
        </div>

        <div className="cart-card__right-wrap">
          <p className="cart-card__price">{card.pizza.price}$</p>

          <div className="cart-card__amount-wrap">
            <img className="cart-card__amount-control" src={less} alt="amount" onClick={decreaseAmount}></img>
            <p className="cart-card__amount-total">{amount}</p>
            <img className="cart-card__amount-control" src={plus} alt="amount" onClick={increaseAmount}></img>
          </div>

          <p className="cart-card__price">{`${price}$`}</p>
        </div>

        <img className="cart-card__remove" src={remove} alt="remove" onClick={handleRemoveFromCart}></img>
      </li>
    </>
  );
};
export default CartCard;
