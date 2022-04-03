import "./Bill.css";

const Bill = ({ totalPrice, shipping }) => {
  return (
    <div className="bill">
      <div className="bill__container">
        <div className="bill__info-container">
          <p className="bill__name">Subtotal</p>
          <p className="bill__name">{`${totalPrice}$`}</p>
        </div>

        <div className="bill__info-container">
          <p className="bill__name">Shipping</p>
          <p className="bill__name">{`${shipping}$`}</p>
        </div>

        <div className="bill__info-container">
          <p className="bill__name">total</p>
          <p className="bill__name">{`${totalPrice + shipping}$`}</p>
        </div>
      </div>
    </div>
  );
};
export default Bill;
