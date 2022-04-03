import React, { useEffect, useState } from "react";

import useFormAndValidation from "../../../../../utils/useFormAndValidation";
import PopupWithForm from "../../../../PopupWithForm/PopupWithForm";

const EditMenuCardPopup = ({ menuEditCard, isOpen, onClose, onMenuEdit }) => {
  const { values, handleChange, errors, isValid, resetForm, setValues } = useFormAndValidation();

  useEffect(() => {
    resetForm();
    setValues({ name: menuEditCard.name, price: menuEditCard.price, text: menuEditCard.text });
  }, [isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();

    onMenuEdit(values, menuEditCard._id);
    onClose(menuEditCard);
  };

  return (
    <PopupWithForm
      title={"Edit Menu card"}
      submit={"Update"}
      isOpen={isOpen}
      onClose={onClose}
      isValid={isValid}
      onSubmit={handleSubmit}
    >
      <div className="popup__inputs">
        <div className="popup__input-container">
          <p className="popup__input-type">name</p>
          <div className="popup__input-wrap">
            <input
              name="name"
              required
              type="name"
              placeholder="Enter name"
              className="popup__input"
              onChange={handleChange}
              value={values.name || ""}
            ></input>
            <span className={`popup__input-error ${errors.name ? "popup__input-error_active" : ""}`}>
              {errors.name}
            </span>
          </div>
        </div>

        <div className="popup__input-container">
          <p className="popup__input-type">price</p>
          <div className="popup__input-wrap">
            <input
              name="price"
              required
              type="number"
              placeholder="Enter price"
              className="popup__input"
              onChange={handleChange}
              value={values.price || ""}
            ></input>
            <span className={`popup__input-error ${errors.price ? "popup__input-error_active" : ""}`}>
              {errors.price}
            </span>
          </div>
        </div>

        <div className="popup__input-container">
          <p className="popup__input-type">Description</p>
          <div className="popup__input-wrap">
            <textarea
              name="text"
              required
              type="text"
              placeholder="Enter text"
              className="popup__input"
              onChange={handleChange}
              value={values.text || ""}
            ></textarea>
            <span className={`popup__input-error ${errors.text ? "popup__input-error_active" : ""}`}>
              {errors.text}
            </span>
          </div>
        </div>
      </div>
    </PopupWithForm>
  );
};
export default EditMenuCardPopup;
