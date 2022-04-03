import "./AboutDelivery.css";

import separator from "../../../../images/Separator.png";
import guy from "../../../../images/deliveryguy.png";
import fork from "../../../../images/fork.png";
import dollar from "../../../../images/dollar.png";
import truck from "../../../../images/truck.png";

const AboutDelivery = () => {
  return (
    <section className="about-delivery">
      <div className="about-delivery__title-container">
        <h4 className="about-delivery__title">Fastest Delivery</h4>
        <img className="about-delivery__seperator" src={separator} alt="seperator"></img>
      </div>

      <div className="about-delivery__container">
        <img className="about-delivery__img" src={guy} alt="delivery guy"></img>
        <ul className="about-delivery__list">
          <li className="about-delivery__item">
            <img className="about-delivery__icon" src={fork} alt="icon"></img>
            <div className="about-delivery__info-container">
              <p className="about-delivery__info-title">Order food from menu</p>
              <p className="about-delivery__info-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.{" "}
              </p>
            </div>
          </li>

          <li className="about-delivery__item">
            <img className="about-delivery__icon" src={dollar} alt="icon"></img>
            <div className="about-delivery__info-container">
              <p className="about-delivery__info-title">Pay your food bill</p>
              <p className="about-delivery__info-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.{" "}
              </p>
            </div>
          </li>

          <li className="about-delivery__item">
            <img className="about-delivery__icon" src={truck} alt="icon"></img>
            <div className="about-delivery__info-container">
              <p className="about-delivery__info-title">Get delivery within 50 mins</p>
              <p className="about-delivery__info-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.{" "}
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
export default AboutDelivery;
