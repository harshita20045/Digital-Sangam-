import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { getCurrentUser } from "../auth/Auth";
import EndPoint from "../../apis/EndPoint";

function MyDialects() {
  let navigate = useNavigate();
  const [dialects, setDialects] = useState([]);

  const stats = {
    total: dialects.length,
    regional: dialects.filter((d) => d.language === "Regional").length,
    tribal: dialects.filter((d) => d.language === "Tribal").length,
    others: dialects.filter(
      (d) => d.language !== "Regional" && d.language !== "Tribal"
    ).length,
  };

  useEffect(() => {
    loadDialects();
  }, []);

  const loadDialects = async () => {
    const user = getCurrentUser();
    if (!user || !user._id) {
      console.warn("User not logged in");
      return;
    }

    try {
      const res = await axios.get(`${EndPoint.AUTHOR_DIALECT}/${user._id}`);
      setDialects(res.data.dialects); 
    } catch (err) {
      console.error("Failed to load dialects:", err);
    }
  };

  const handleView = (dialect) => {
    navigate(`/dialect/${dialect._id}`, { state: { dialect } });
  };

  return (
    <>
      <Header />
      <div className="container my-5">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div>
            <h2 className="fw-bold">My Dialects</h2>
            <p className="text-muted">
              Manage your submitted dialects and view their classifications
            </p>
          </div>
          <Link to="/upload-dialect" className="btn btn-dark px-4">
            + Add New Dialect
          </Link>
        </div>

        <div className="row text-center mb-4 g-3">
          <div className="col-md-3">
            <div className="bg-white p-4 rounded shadow-sm">
              <h4 className="mb-0">{stats.total}</h4>
              <small className="text-muted">Total Dialects</small>
            </div>
          </div>
          <div className="col-md-3">
            <div className="bg-white p-4 rounded shadow-sm">
              <h4 className="mb-0 text-success">{stats.regional}</h4>
              <small className="text-muted">Regional</small>
            </div>
          </div>
          <div className="col-md-3">
            <div className="bg-white p-4 rounded shadow-sm">
              <h4 className="mb-0 text-warning">{stats.tribal}</h4>
              <small className="text-muted">Tribal</small>
            </div>
          </div>
          <div className="col-md-3">
            <div className="bg-white p-4 rounded shadow-sm">
              <h4 className="mb-0 text-primary">{stats.others}</h4>
              <small className="text-muted">Other Types</small>
            </div>
          </div>
        </div>

        {dialects.length === 0 ? (
          <div className="text-center my-5">
            <h4>No dialects found</h4>
            <p>You have not added any dialects yet.</p>
          </div>
        ) : (
          dialects.map((dialect, index) => (
            <div
              key={index}
              className="card flex-md-row shadow-sm border-0 overflow-hidden mb-4"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/263/263115.png"
                className="img-fluid"
                alt="dialect"
                style={{
                  width: "250px",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
              <div className="card-body">
                <span
                  className="mt-0 mb-2 badge rounded-pill bg-secondary"
                  style={{ fontSize: "12px" }}
                >
                  {dialect.language}
                </span>
                <h5 className="fw-bold mt-2">{dialect.word}</h5>
                <p className="text-muted mb-1">
                  <strong>Meaning:</strong> {dialect.meaning}
                </p>
                <p className="text-muted mb-1">
                  <strong>Example:</strong> {dialect.example}
                </p>
                <p className="text-muted mb-2">
                  <strong>Status:</strong> {dialect.status}
                </p>
                <audio
                  controls
                  src={dialect.audioLink}
                  style={{ width: "100%", marginBottom: "10px" }}
                >
                  Your browser does not support the audio element.
                </audio>
                <button
                  onClick={() => handleView(dialect)}
                  className="btn btn-outline-dark btn-sm"
                >
                  View Dialect →
                </button>
              </div>
            </div>
          ))
        )}
      </div>
      <Footer />
    </>
  );
}

export default MyDialects;
