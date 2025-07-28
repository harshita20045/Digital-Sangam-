import { FaArrowTrendUp } from "react-icons/fa6";
import { IoPricetagOutline } from "react-icons/io5";
import { FiBookOpen } from "react-icons/fi";
import image from "../../../images/triveniSangam.jpg";

function Story() {
  return (
    <>
      <div
        className="py-5 text-center mb-4"
        style={{
          background: "linear-gradient(to right, #faf2e8ff, #faececff)",
        }}
      >
        <h1 className="mt-5 fw-semibold">Articles & Stories</h1>
        <p className="text-muted fs-6 mx-auto" style={{ maxWidth: "800px" }}>
          Dive deep into India's rich cultural heritage through expert articles,
          research, and stories that celebrate our diverse traditions.
        </p>
      </div>

      <div className="container mb-3">
        <div className="row justify-content-center gap-1">
          <div className="col-md-4">
            <input
              type="text"
              placeholder="Search articles..."
              className="form-control px-4 py-2 rounded"
              style={{ backgroundColor: "#e3e0e0ff", border: "none" }}
            />
          </div>
          <div className="col-auto">
            <button
              className="btn btn-outline-secondary rounded px-3 py-1"
              style={{
                fontSize: "12px",
                backgroundColor: "#000000",
                color: "white",
              }}
            >
              <IoPricetagOutline className="me-1" />
              All Topics
            </button>
          </div>{" "}
          <div className="col-auto">
            <button
              className="btn btn-outline-secondary rounded px-3 py-1"
              style={{ fontSize: "12px", color: "black" }}
            >
              <IoPricetagOutline className="me-1" />
              All Topics
            </button>
          </div>
          <div className="col-auto">
            <button
              className="btn btn-outline-secondary rounded px-3 py-1"
              style={{ fontSize: "12px", color: "black" }}
            >
              <IoPricetagOutline className="me-1" />
              All Topics
            </button>
          </div>
          <div className="col-auto">
            <button
              className="btn btn-outline-secondary rounded px-3 py-1"
              style={{ fontSize: "12px", color: "black" }}
            >
              <IoPricetagOutline className="me-1" />
              All Topics
            </button>
          </div>
          <div className="col-auto">
            <button
              className="btn btn-outline-secondary rounded px-3 py-1"
              style={{ fontSize: "12px", color: "black" }}
            >
              <IoPricetagOutline className="me-1" />
              All Topics
            </button>
          </div>
          <div className="col-auto">
            <button
              className="btn btn-outline-secondary rounded px-3 py-1"
              style={{ fontSize: "12px", color: "black" }}
            >
              <IoPricetagOutline className="me-1" />
              All Topics
            </button>
          </div>
        </div>
      </div>

      <hr className="mb-0" />

      <div className="container my-5">
        <div className="d-flex align-items-center mb-3">
          <FaArrowTrendUp size={24} className="me-2" />
          <h4 className="mb-0">Featured Articles</h4>
        </div>

        <div className="row g-4">
         
            <div  className="col-sm-6 col-md-4 col-lg-3">
              <div className="card h-100 shadow-sm border-0">
                <img
                  src={image}
                  className="card-img-top rounded-top"
                  alt="Article"
                  style={{ height: "180px", objectFit: "cover" }}
                />
                <div className="card-body d-flex flex-column">
                  <h6 className="fw-bold mb-2">Card Title</h6>
                  <p className="text-muted small flex-grow-1">
                    Short article summary to give a preview of the content.
                  </p>
                  <a href="#" className="btn btn-dark btn-sm mt-auto">
                    Read More →
                  </a>
                </div>
              </div>
            </div>
          
        </div>
      </div>

     
      <div className="container my-5">
        <div className="d-flex align-items-center mb-3">
          <FiBookOpen  size={26} className="me-2" />
          <h4 className="mb-0">All Articles</h4>
        </div>

        <div className="card flex-md-row shadow-sm border-0 overflow-hidden">
          <img
            src={image}
            className="img-fluid"
            alt="article"
            style={{
              width: "250px",
              height: "100%",
              objectFit: "cover",
            }}
          />
          <div className="card-body">
            <h5 className="fw-bold">
              The Living Traditions of Classical Dance
            </h5>
            <p className="text-muted mb-2">
              Explore how Bharatnatyam, Kathak, and other classical forms evolve
              while preserving their ancient essence.
            </p>
            <div className="d-flex justify-content-between small text-muted mb-3">
              <span>Dr. Priya Krishnan</span>
              <span>8 min read</span>
            </div>
            <a href="#" className="btn btn-outline-dark btn-sm">
              Read Article →
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Story;
