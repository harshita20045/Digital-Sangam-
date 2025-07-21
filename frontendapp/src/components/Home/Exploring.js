import "./style/Exploring.css";
import image from "../../images/gangaAarti.jpg";
function Exploring() {
  return (
    <div className="d-flex  flex-row exploring-main">
      <div className="exploring-left">
        <h1 className="exploring-heading">
          Digital <br/><span className="highlight">Sangam</span>
        </h1>
        <p className="exploring-text">
          Where India's rich cultural heritage meets digital innovation. Explore
          languages, tribes, traditions, and stories that define our nation.
        </p>
        <button className="exploring-button">Start Exploring</button>
      </div>
      <div className="exploring-right">
        <img src={image} alt="Cultural" className="exploring-image" />
      </div>
    </div>
  );
}
export default Exploring;
