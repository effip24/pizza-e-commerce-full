import "./Subscribe.css";

import subscribe from "../../../../images/subscribe.png";

const Subscribe = () => {
  return (
    <section className="subscribe">
      <div className="subscribe__container">
        <img className="subscribe__img" src={subscribe} alt="subscribe"></img>
        <div className="subscribe__info">
          <p className="subscribe__title">Subscribe For Pizza Offer</p>
          <p className="subscribe__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </p>
          <form className="subscribe__form">
            <input className="subscribe__input" placeholder="Enter you mail"></input>
            <button className="subscribe__button">subscribe</button>
          </form>
        </div>
      </div>
    </section>
  );
};
export default Subscribe;
