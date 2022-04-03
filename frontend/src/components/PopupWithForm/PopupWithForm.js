import React from "react";

import "./PopupWithForm.css";

const PopupWithForm = ({ title, submit, isOpen, onClose, isValid, onSubmit, children }) => {
  return (
    <div className={`popup ${isOpen ? "popup_opened" : ""}`}>
      <div className="popup__container">
        <button aria-label="close" type="button" className="popup__close" onClick={onClose}></button>

        <form noValidate className="popup__form" onSubmit={onSubmit}>
          <h2 className="popup__title">{title}</h2>

          {children}

          <button
            className={`popup__submit ${isValid ? "" : "popup__submit_inactive"}`}
            type="submit"
            onSubmit={onSubmit}
          >
            {submit}
          </button>
        </form>
      </div>
    </div>
  );
};
export default PopupWithForm;
