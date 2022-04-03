import "./Contact.css";
import useFormAndValidation from "../../../utils/useFormAndValidation";

import contact from "../../../images/contact.png";
import { useEffect } from "react";

const Contact = () => {
  const { values, handleChange, errors, isValid, resetForm, setValues } = useFormAndValidation();

  useEffect(() => {
    resetForm();
    setValues({});
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
    return;
  };

  return (
    <section className="contact">
      <div className="contact__container">
        <h5 className="contact__title">Contact us.</h5>
        <div className="contact__form-container">
          <form className="contact__form" onSubmit={handleSubmit}>
            <p className="contact__form-title">Have Any Questions? </p>
            <div className="contact__input-container">
              <p className="contact__input-name">
                Your Name <span className="contact__input-bold">*</span>
              </p>
              <input
                name="name"
                required
                type="text"
                pattern="[A-Za-z\s]{1,32}"
                className="checkout__input"
                onChange={handleChange}
                value={values.name || ""}
              ></input>
              <span className="checkout__input-error">{errors.name}</span>
            </div>

            <div className="contact__input-container">
              <p className="contact__input-name">
                Your Email <span className="contact__input-bold">*</span>
              </p>
              <input
                name="email"
                required
                type="email"
                className="checkout__input"
                onChange={handleChange}
                value={values.email || ""}
              ></input>
              <span className="checkout__input-error">{errors.email}</span>
            </div>

            <div className="contact__input-container">
              <p className="contact__input-name">
                Subject <span className="contact__input-bold">*</span>
              </p>
              <input className="contact__input"></input>
            </div>

            <div className="contact__input-container">
              <p className="contact__input-name">
                Message <span className="contact__input-bold">*</span>
              </p>
              <textarea
                name="notes"
                required
                type="text"
                className="contact__text"
                onChange={handleChange}
                value={values.notes || ""}
              ></textarea>
              <span className="checkout__input-error">{errors.notes}</span>
            </div>

            <button
              aria-label="submit"
              className={`contact__submit ${isValid ? "" : "checkout__submit_inactive"}`}
              type="submit"
            >
              SEND MESSAGE
            </button>
          </form>
          <div className="contact__image-wrap">
            <img className="contact__image" src={contact} alt="contact"></img>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
