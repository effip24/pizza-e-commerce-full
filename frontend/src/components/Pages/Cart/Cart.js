import "./Cart.css";

import CartCard from "./CartCard/CartCard";
import TotalBill from "../../Bill/Bill";
import { Link } from "react-router-dom";

const Cart = ({ cartList, onUpdateCart, onRemoveFromCart, totalPrice, shipping }) => {
  return (
    <section className="cart">
      <h5 className="cart__title">Shopping Cart.</h5>

      <div className="cart__container">
        <div className="cart__products-container">
          <div class="cart__table-head">
            <div className="cart__table-left-wrap">
              <lable class="cart__table-title">Product</lable>
            </div>

            <div class="cart__table-right-wrap">
              <lable class="cart__table-title">Price</lable>
              <lable class="cart__table-title">Quantity</lable>
              <lable class="cart__table-title">Subtotal</lable>
            </div>
          </div>

          <ul className="cart__list">
            {cartList.map((card, id) => (
              <CartCard key={id} card={card} onUpdateCart={onUpdateCart} onRemoveFromCart={onRemoveFromCart} />
            ))}
          </ul>

          <form className="cart__coupon-container">
            <input className="cart__input" placeholder="Coupon Code"></input>
            <button className="cart__apply">APPLY COUPON</button>
          </form>
        </div>

        <div className="cart__total">
          <TotalBill totalPrice={totalPrice} shipping={cartList.length > 0 ? shipping : 0} />
          <Link className={`cart__checkout ${cartList.length > 0 ? "" : "cart__checkout_inactive"}`} to="/checkout">
            proceed to checkout
          </Link>
        </div>
      </div>
    </section>
  );
};
export default Cart;
