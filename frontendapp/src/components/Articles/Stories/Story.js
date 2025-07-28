import { FaArrowTrendUp } from "react-icons/fa6";
import { IoPricetagOutline } from "react-icons/io5";
import image from "../../../images/triveniSangam.jpg"
function Story() {
  return (
    <>
      <div
        className="py-5 text-center mb-4"
        style={{
          background: "linear-gradient(to right, #faf2e8ff, #faececff)",
        }}
      >
        <h1 className="mt-5" style={{ fontWeight: "500" }}>
          Articles & Stories
        </h1>
        <div className="container mt-3">
          <p
            className="text-muted fs-7 mx-auto mb-5"
            style={{ maxWidth: "800px" }}
          >
            Dive deep into India's rich cultural heritage through expert
            articles, research, and stories that celebrate our diverse
            traditions.
          </p>
        </div>
      </div>
      <div className="d-flex justify-content-center align-items-center gap-4">
        <input
          type="text"
          placeholder="
Search articles..."
          className="px-5 py-1"
          style={{
            border: "0px",
            backgroundColor: "#e3e0e0ff",
            width: "30%",
            borderRadius: "10px",
          }}
        />
        <button className="btn-dark p-1 rounded" style={{ fontSize: "12px" }}>
          <IoPricetagOutline
            style={{ color: "white", height: "15px", width: "20px" }}
          />
          All Topics
        </button>
        <button
          className="p-1 rounded"
          style={{
            fontSize: "12px",
            backgroundColor: "white",
            border: "1px solid #c7c6c6ff",
          }}
        >
          <IoPricetagOutline
            style={{ color: "black", height: "15px", width: "20px" }}
          />
          All Topics
        </button>{" "}
        <button
          className="p-1 rounded"
          style={{
            fontSize: "12px",
            backgroundColor: "white",
            border: "1px solid #c7c6c6ff",
          }}
        >
          <IoPricetagOutline
            style={{ color: "black", height: "15px", width: "20px" }}
          />
          All Topics
        </button>{" "}
        <button
          className="p-1 rounded"
          style={{
            fontSize: "12px",
            backgroundColor: "white",
            border: "1px solid #c7c6c6ff",
          }}
        >
          <IoPricetagOutline
            style={{ color: "black", height: "15px", width: "20px" }}
          />
          All Topics
        </button>{" "}
        <button
          className="p-1 rounded"
          style={{
            fontSize: "12px",
            backgroundColor: "white",
            border: "1px solid #c7c6c6ff",
          }}
        >
          <IoPricetagOutline
            style={{ color: "black", height: "15px", width: "20px" }}
          />
          All Topics
        </button>{" "}
        <button
          className="p-1 rounded"
          style={{
            fontSize: "12px",
            backgroundColor: "white",
            border: "1px solid #c7c6c6ff",
          }}
        >
          <IoPricetagOutline
            style={{ color: "black", height: "15px", width: "20px" }}
          />
          All Topics
        </button>{" "}
        <button
          className="p-1 rounded"
          style={{
            fontSize: "12px",
            backgroundColor: "white",
            border: "1px solid #c7c6c6ff",
          }}
        >
          <IoPricetagOutline
            style={{ color: "black", height: "15px", width: "20px" }}
          />
          All Topics
        </button>
        <button
          className="p-1 rounded"
          style={{
            fontSize: "12px",
            backgroundColor: "white",
            border: "1px solid #c7c6c6ff",
          }}
        >
          <IoPricetagOutline
            style={{ color: "black", height: "15px", width: "20px" }}
          />
          All Topics
        </button>
      </div>
      <hr className="mb-0" style={{ color: "#aeadadff" }} />
      <div className="d-flex mt-5 mx-3">
        <FaArrowTrendUp
          style={{
            height: "40px",
            width: "30px",
            marginLeft: "50px",
            marginRight: "10px",
          }}
        />
        <h3>Featured Articles</h3>
      </div>
      <div className="d-flex justify-content-center align-items-center mt-3 gap-4">
        <div class="card" style={{width: "18rem"}}>
          <img class="card-img-top" src={image} alt="Card image cap" />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div><div class="card" style={{width: "18rem"}}>
          <img class="card-img-top" src={image} alt="Card image cap" />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div><div class="card" style={{width: "18rem"}}>
          <img class="card-img-top" src={image} alt="Card image cap" />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div><div class="card" style={{width: "18rem"}}>
          <img class="card-img-top" src={image} alt="Card image cap" />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
export default Story;
