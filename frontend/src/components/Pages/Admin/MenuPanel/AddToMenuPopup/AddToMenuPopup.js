import React, { useEffect } from "react";

import CloudinaryFormValidator from "../../../../../utils/CloudinaryFormValidator";
import PopupWithForm from "../../../../PopupWithForm/PopupWithForm";

const AddToMenuPopup = ({ isOpen, onClose, onAddToMenu }) => {
  const { values, handleChange, errors, isValid, resetForm, setValues, handleFileUpload, uploadState, setUploadState } =
    CloudinaryFormValidator();

  useEffect(() => {
    resetForm();
    setValues({ url: "", name: "", price: "", text: "" });
  }, [isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();

    onAddToMenu(values);
  };

  return (
    <PopupWithForm
      title={"Add to menu"}
      submit={"Add"}
      isOpen={isOpen}
      onClose={onClose}
      isValid={isValid}
      onSubmit={handleSubmit}
    >
      <div className="popup__inputs">
        <div className="popup__uploader">
          <input
            required
            name="url"
            type="url"
            placeholder="Image link"
            className={`popup__input  ${errors.url ? "popup__input_type_error" : ""}`}
            value={values.url || ""}
            onChange={handleChange}
          />
          <p className="popup__lable">OR</p>
          <input name="url" id="place-file" type="file" hidden accept="image/*" onChange={handleFileUpload} />
          <label className="popup__input popup__input_type_file" htmlFor="place-file">
            {uploadState}
          </label>
          <span className={`popup__input-error ${errors.file ? "popup__input-error_active" : ""}`}>{errors.file}</span>
        </div>

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
export default AddToMenuPopup;
