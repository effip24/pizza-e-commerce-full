import { Link } from "react-router-dom";
import "./InfoToolTip.css";

import Bill from "../Bill/Bill";
import { useEffect, useState } from "react";

const InfoToolTip = ({ isOpen, totalPrice, shipping, onClose }) => {
  const [total, setTotal] = useState(0);
  const [shippingPrice, setShippingPrice] = useState(0);

  useEffect(() => {
    setTotal(totalPrice);
    setShippingPrice(shipping);
  }, []);

  return (
    <div className={`info ${isOpen ? "info_opened" : ""}`}>
      <div className="info__container">
        <div className="info__seccess"></div>
        <h6 className="info__info-title">THANK YOU FOR YOUR ORDER</h6>
        <Bill totalPrice={total} shipping={shippingPrice} />
        <Link className="info__info-link" to="/" onClick={onClose}>
          BACK TO HOME
        </Link>
      </div>
    </div>
  );
};
export default InfoToolTip;
