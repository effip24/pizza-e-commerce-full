import "./Footer.css";

import logo from "../../images/Logo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <img className="footer__logo" src={logo} alt="logo"></img>
        <div className="footer__main-container">
          <div className="footer__main-left">
            <div className="footer__main-bottom">
              <p className="footer__title">Ready to get started?</p>
              <div className="footer__download-links">
                <button className="footer__download footer__download_type_google "></button>
                <button className="footer__download footer__download_type_apple"></button>
              </div>
            </div>
          </div>

          <div className="footer__main-right">
            <p className="footer__main-right-title">Opening Hours</p>
            <p className="footer__main-right-text">Sun - Thu : 12AM - 00AM</p>
            <p className="footer__main-right-text">
              Friday: <span className="footer__main-right-text-close">Closed</span>{" "}
            </p>
            <p className="footer__main-right-text">Sat : 20PM - 00AM</p>
          </div>
        </div>
        <div className="footer__copyrights-container">
          <p className="footer__copyrights">© 2022 All Rights Reserved by Ephraim.p. </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
