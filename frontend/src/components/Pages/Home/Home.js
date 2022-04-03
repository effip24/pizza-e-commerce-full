import "./Home.css";

import Hero from "./Hero/Hero";
import Discount from "./Discount/Discount";
import Delivery from "./Delivery/Delivery";
import AboutDelivery from "./AboutDelivery/AboutDelivery";
import Subscribe from "./Subscribe/Subscribe";

const Home = ({ discountPizzas, onAddToCart, isSearching }) => {
  return (
    <section className="home">
      <Hero />
      <Discount discountPizzas={discountPizzas} onAddToCart={onAddToCart} isSearching={isSearching} />
      <Delivery />
      <AboutDelivery />
      <Subscribe />
    </section>
  );
};
export default Home;
