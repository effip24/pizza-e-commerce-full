import "./MyOrder.css";
import useFormAndValidation from "../../../utils/useFormAndValidation";
import Receipt from "../../Receipt/Receipt";
import NothingFound from "../../NothingFound/NothingFound";
import { useEffect, useState } from "react";

const MyOrder = ({
  customerOrders,
  onOrderSearch,
  orderStatus,
  onStatusCheck,
}) => {
  const { values, handleChange, errors, isValid, resetForm, setValues } =
    useFormAndValidation();
  const [orderId, setOrderId] = useState("");

  const [isStatusBarOpen, setIsStatusBarOpen] = useState(false);
  const [isSearch, setIsSearch] = useState(false);

  const [showNothingFound, setShowNothingFound] = useState(false);

  const isPreparing = orderStatus === 1;
  const isOnDeliver = orderStatus === 2;
  const isDelivered = orderStatus === 3;

  useEffect(() => {
    resetForm();
    setValues({});
    setIsStatusBarOpen(false);
    setIsSearch(false);
  }, []);

  useEffect(() => {
    if (isSearch) {
      if (customerOrders.length === 0) {
        setShowNothingFound(true);
      } else {
        setShowNothingFound(false);
      }
    }
  }, [customerOrders]);

  useEffect(() => {
    if (isStatusBarOpen) {
      onStatusCheck(orderId);

      const statusCheck = setInterval(function () {
        onStatusCheck(orderId);
      }, 3000);

      return () => {
        clearInterval(statusCheck);
      };
    }
  }, [isStatusBarOpen, orderId]);

  const handleOrderSearch = (id) => {
    setIsStatusBarOpen(true);
    setOrderId(id);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onOrderSearch(values.phone);
    setIsSearch(true);

    return;
  };

  return (
    <section className="order">
      <div className="order__container">
        <form noValidate className="order__form" onSubmit={handleSubmit}>
          <div className="order__input-wrap">
            <input
              name="phone"
              required
              pattern="[0-9]{1,10}"
              className="order__input"
              placeholder="phone number"
              onChange={handleChange}
              value={values.phone || ""}
            ></input>

            <button
              className={`order__button ${
                isValid ? "" : "order__button_inactive"
              }`}
              type="submit"
            >
              Search
            </button>
          </div>

          <span className="checkout__input-error">{errors.phone}</span>
        </form>

        {showNothingFound ? (
          <NothingFound showNothingFound={showNothingFound} />
        ) : (
          <div
            className={`order__track ${isSearch ? "order__track_show" : ""}`}
          >
            <ul
              className={`order__track-list ${
                isStatusBarOpen ? "order__track-list_show" : ""
              }`}
            >
              <li className="order__track-item">
                <div className="order__track-icon-wrap">
                  <i className="order__track-icon order__track-icon_type_payment"></i>
                  <p className="order__track-stage">Payment</p>
                </div>
              </li>

              <li className="order__track-item">
                <div className="order__track-icon-wrap">
                  <i
                    className={`order__track-icon order__track-icon_type_prepare  ${
                      isPreparing ? "order__track-icon_active" : ""
                    }`}
                  ></i>
                  <p className="order__track-stage">Preparing</p>
                </div>
              </li>

              <li className="order__track-item">
                <div className="order__track-icon-wrap">
                  <i
                    className={`order__track-icon order__track-icon_type_delivery ${
                      isOnDeliver ? "order__track-icon_active" : ""
                    }`}
                  ></i>
                  <p className="order__track-stage">On the way</p>
                </div>
              </li>

              <li className="order__track-item">
                <div className="order__track-icon-wrap">
                  <i
                    className={`order__track-icon order__track-icon_type_delivered ${
                      isDelivered ? "order__track-icon_active" : ""
                    }`}
                  ></i>
                  <p className="order__track-stage">Delivered</p>
                </div>
              </li>
            </ul>
            {customerOrders.map((order) => (
              <Receipt
                key={order._id}
                order={order}
                onSearch={handleOrderSearch}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
export default MyOrder;
