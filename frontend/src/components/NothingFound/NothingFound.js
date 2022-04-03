import "./NothingFound.css";

import notFound from "../../images/not-found.png";

const NothingFound = ({ showNothingFound }) => {
  return (
    <section className="results" style={{ display: `${showNothingFound ? "flex" : ""}` }}>
      <img src={notFound} alt="nothing found" className="results__image"></img>
      <div className="results__not-found-container">
        <h5 className="results__not-found-title">Nothing found</h5>
        <p className="results__not-found-subtitle">Sorry, but nothing matched your search terms.</p>
      </div>
    </section>
  );
};
export default NothingFound;
