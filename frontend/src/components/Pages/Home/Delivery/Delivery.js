import "./Delivery.css";

import separator from "../../../../images/Separator.png";
import fork from "../../../../images/fork.png";
import book from "../../../../images/book.png";
import truck from "../../../../images/truck.png";
import one from "../../../../images/one.png";
import two from "../../../../images/two.png";
import three from "../../../../images/three.png";

const Delivery = () => {
  return (
    <section className="delivery">
      <div className="delivery__title-container">
        <h4 className="delivery__title">Fresh Pizza. Delivered.</h4>
        <img className="delivery__seperator" src={separator} alt="seperator"></img>
      </div>

      <ul className="delivery__about-list">
        <li className="delivery__about-item">
          <div className="delivery__about-img-wrap">
            <img className="delivery__about-img" src={fork} alt="about"></img>
            <img className="delivery__about-counter" src={one} alt="count"></img>
          </div>

          <p className="delivery__about-title">Choose your food</p>
          <p className="delivery__about-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </p>
        </li>

        <li className="delivery__about-item">
          <div className="delivery__about-img-wrap">
            <img className="delivery__about-img" src={book} alt="about"></img>
            <img className="delivery__about-counter" src={two} alt="count"></img>
          </div>

          <p className="delivery__about-title">Pay your bill</p>
          <p className="delivery__about-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </p>
        </li>

        <li className="delivery__about-item">
          <div className="delivery__about-img-wrap">
            <img className="delivery__about-img" src={truck} alt="about"></img>
            <img className="delivery__about-counter" src={three} alt="count"></img>
          </div>

          <p className="delivery__about-title">Get the delivery</p>
          <p className="delivery__about-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </p>
        </li>
      </ul>
    </section>
  );
};
export default Delivery;
