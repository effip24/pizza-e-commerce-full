import "./Hero.css";

import bg from "../../../../images/homebg.png";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__container">
        <div className="hero__info">
          <div className="hero__bunner">
            <i className="hero__delivery-icon"></i>
            <p className="hero__delivery-text">Faster Delivery Guaranteed</p>
          </div>
          <h1 className="hero__title">
            You would love our <span className="hero__title-bold">hot pizza.</span>
          </h1>
          <p className="hero__text">
            Get 10% instant off for all order and $200 signup bonus today for new registration!
          </p>

          <div className="hero__downloads">
            <button className="hero__download-btn hero__download-btn_type_gplay "></button>
            <button className="hero__download-btn hero__download-btn_type_apple"></button>
          </div>
        </div>

        <div className="hero__background-image-wrap">
          <img className="hero__background-image" src={bg} alt="pizza background"></img>
        </div>
      </div>
    </section>
  );
};
export default Hero;
