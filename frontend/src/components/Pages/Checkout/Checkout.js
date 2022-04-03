import "./Checkout.css";

import Bill from "../../Bill/Bill";
import InfoToolTip from "../../InfoToolTip/InfoToolTip";
import Preloader from "../../Preloader/Preloader";
import useFormAndValidation from "../../../utils/useFormAndValidation";
import { useEffect, useState } from "react";

const Checkout = ({ totalPrice, onPlaceOrder, shipping, isInfoToolTipOpen, closeAllPopups, isSearching }) => {
  const { values, handleChange, errors, isValid, resetForm, setValues } = useFormAndValidation();

  const [agree, setAgree] = useState(false);

  useEffect(() => {
    resetForm();
    setValues({});
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    values["total"] = (totalPrice + 10).toString();

    onPlaceOrder(values);
    return;
  };

  const handleAgreementCheck = () => {
    setAgree(!agree);
  };

  return (
    <section className="checkout">
      {isSearching ? (
        <Preloader isSearching={isSearching} />
      ) : (
        <div className="checkout__form-container">
          <form noValidate className="checkout__form" onSubmit={handleSubmit}>
            <div className="checkout__form-inputs">
              <p className="checkout__form-title">Billing Details </p>
              <div className="checkout__name-wrap">
                <div className="checkout__input-container">
                  <p className="checkout__input-name">
                    Name <span className="checkout__input-bold">*</span>
                  </p>
                  <input
                    name="firstName"
                    required
                    type="text"
                    pattern="[A-Za-z]{1,32}"
                    className="checkout__input"
                    onChange={handleChange}
                    value={values.firstName || ""}
                  ></input>
                  <span className="checkout__input-error">{errors.firstName}</span>
                </div>

                <div className="checkout__input-container">
                  <p className="checkout__input-name">
                    Last Name <span className="checkout__input-bold">*</span>
                  </p>
                  <input
                    name="lastName"
                    required
                    type="text"
                    pattern="[A-Za-z]{1,32}"
                    className="checkout__input"
                    onChange={handleChange}
                    value={values.lastName || ""}
                  ></input>
                  <span className="checkout__input-error">{errors.lastName}</span>
                </div>
              </div>

              <div className="checkout__input-container">
                <p className="checkout__input-name">
                  Address <span className="checkout__input-bold">*</span>
                </p>
                <input
                  name="address"
                  required
                  type="text"
                  className="checkout__input"
                  onChange={handleChange}
                  value={values.address || ""}
                ></input>
                <span className="checkout__input-error">{errors.address}</span>
              </div>

              <div className="checkout__input-container">
                <p className="checkout__input-name">
                  Phone <span className="checkout__input-bold">*</span>
                </p>
                <input
                  name="phone"
                  required
                  type="number"
                  className="checkout__input"
                  onChange={handleChange}
                  value={values.phone || ""}
                ></input>
                <span className="checkout__input-error">{errors.phone}</span>
              </div>

              <div className="checkout__input-container">
                <p className="checkout__input-name">Notes</p>
                <textarea
                  name="notes"
                  type="text"
                  className="checkout__text"
                  onChange={handleChange}
                  value={values.notes || ""}
                ></textarea>
              </div>
            </div>

            <div className="cart__total">
              <Bill totalPrice={totalPrice} shipping={shipping} />

              <div className="checkout__billing">
                <p className="checkout__billing-title">Payment Method</p>
                <div className="checkout__radio-container">
                  <input
                    required
                    type="radio"
                    name="billing"
                    className="checkout__radio-input"
                    value="cash"
                    onChange={handleChange}
                  ></input>
                  <p className="checkout__radio-lable">Cash on Delivery</p>
                </div>

                <div className="checkout__radio-container">
                  <input
                    required
                    type="radio"
                    name="billing"
                    className="checkout__radio-input"
                    value="paypal"
                    onChange={handleChange}
                  ></input>
                  <p className="checkout__radio-lable">Paypal</p>
                </div>

                <div className="checkout__radio-container">
                  <input
                    required
                    type="radio"
                    name="billing"
                    className="checkout__radio-input"
                    onChange={handleChange}
                    value="credit card"
                  ></input>
                  <p className="checkout__radio-lable">Credit cart</p>
                </div>

                <p className="checkout__billing-info">
                  Your personal data will be used to process your order, support your experience throughout this
                  website, and for other purposes described in our privacy policy.
                </p>

                <div className="checkout__radio-container">
                  <input
                    required
                    type="radio"
                    name="agree"
                    value={agree}
                    className={`checkout__radio-input checkout__radio-input_type_square ${
                      agree ? "checkout__radio-input_checked" : ""
                    }`}
                    onChange={handleChange}
                    onClick={handleAgreementCheck}
                  ></input>
                  <p className="checkout__radio-lable">I have read and agree to the website terms and conditions *</p>
                </div>
              </div>

              <button
                aria-label="place order"
                className={`checkout__submit ${isValid && agree ? "" : "checkout__submit_inactive"}`}
                type="submit"
              >
                PLACE ORDER
              </button>
            </div>
          </form>
        </div>
      )}

      <InfoToolTip isOpen={isInfoToolTipOpen} totalPrice={totalPrice} shipping={shipping} onClose={closeAllPopups} />
    </section>
  );
};
export default Checkout;
