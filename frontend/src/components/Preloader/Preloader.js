import "./Preloader.css";

const Preloader = ({ isSearching }) => {
  return (
    <div className="circle-preloader" style={{ display: `${isSearching ? "flex" : ""}` }}>
      <i className="circle-preloader__spinner"></i>
    </div>
  );
};
export default Preloader;
