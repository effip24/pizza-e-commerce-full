import "./Login.css";

import { useEffect } from "react";
import { withRouter } from "react-router-dom";
import useFormAndValidation from "../../utils/useFormAndValidation";

const Login = ({ onLogin, isSending, adminLoginError }) => {
  const { values, handleChange, errors, isValid, resetForm } = useFormAndValidation();

  useEffect(() => {
    resetForm();
  }, [resetForm]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (values.email && values.password) {
      onLogin(values.email, values.password);
    }

    return;
  };

  return (
    <section className="login">
      <div className="login__from-container">
        <form name="login" action="#" className="login__form" onSubmit={handleSubmit}>
          <div className="login__title-container">
            <h3 className="login__title">Log in</h3>
            <div className="login__input-container">
              <div className="login__input-wrap">
                <input
                  required
                  name="email"
                  type="email"
                  placeholder="Email"
                  className={`login__input ${errors.email ? "login__input_type_error" : ""}`}
                  value={values.email || ""}
                  onChange={handleChange}
                ></input>
                <span className={`login__input-error ${errors.email ? "login__input-error_active" : ""}`}>
                  {errors.email}
                </span>
              </div>

              <div className="login__input-wrap">
                <input
                  required
                  minLength="6"
                  maxLength="30"
                  name="password"
                  type="password"
                  placeholder="password"
                  className={`login__input ${errors.password ? "login__input_type_error" : ""}`}
                  value={values.password || ""}
                  onChange={handleChange}
                ></input>
                <span className={`login__input-error ${errors.password ? "login__input-error_active" : ""}`}>
                  {errors.password}
                </span>
              </div>
            </div>
          </div>
          <div className="login__submit-container">
            <button className={`login__submit ${!isValid ? "login__submit_inactive" : ""}`} type="submit" to="/admin">
              {isSending ? "Logging, please wait..." : "Log in"}
            </button>
            <label className="login__error">
              {adminLoginError ? "Login failed, please check username or password" : ""}
            </label>
          </div>
        </form>
      </div>
    </section>
  );
};
export default withRouter(Login);
