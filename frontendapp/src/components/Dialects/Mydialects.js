import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { getCurrentUser } from "../auth/Auth";
import EndPoint, { BASE_URL } from "../../apis/EndPoint";

function MyDialects() {
  const navigate = useNavigate();
  const [dialects, setDialects] = useState([]);

  const stats = {
    total: dialects.length,
    pending: dialects.filter((d) => d.status === "pending").length,
    approved: dialects.filter((d) => d.status === "approved").length,
    rejected: dialects.filter((d) => d.status === "rejected").length,
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
      setDialects(res.data.dialects || []);
    } catch (err) {
      console.error("Failed to load dialects:", err);
    }
  };

  const handleView = (dialect) => {
    navigate(`/view-more`, { state: { dialect } });
  };

  
  const [statusFilter, setStatusFilter] = useState("all");

 
  const filteredDialects =
    statusFilter === "all"
      ? dialects
      : dialects.filter((d) => d.status === statusFilter);

  return (
    <>
      <Header />
      <div className="container my-5">
        {/* Page Title + Button */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div>
            <h2 className="fw-bold">My Dialects</h2>
            <p className="text-muted">
              Manage your submitted dialects and view their classifications
            </p>
          </div>
          <Link to="/add-dialect" className="btn btn-primary px-4 shadow-sm">
            + Add New Dialect
          </Link>
        </div>

        {/* Filter by Status */}
        <div className="mb-4 d-flex align-items-center gap-2">
          <label className="fw-semibold mb-0">Filter by Status:</label>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="form-select w-auto border-primary"
            style={{ minWidth: 140 }}
          >
            <option value="all">All</option>
            <option value="pending">Pending</option>
            <option value="approved">Approved</option>
            <option value="rejected">Rejected</option>
          </select>
        </div>

        {/* Stats */}
        <div className="row text-center mb-4 g-3">
          <div className="col-md-3">
            <div className="bg-light p-4 rounded-3 border border-1">
              <h4 className="mb-0">{stats.total}</h4>
              <small className="text-muted">Total Dialects</small>
            </div>
          </div>
          <div className="col-md-3">
            <div className="bg-light p-4 rounded-3 border border-warning border-2">
              <h4 className="mb-0 text-warning">{stats.pending}</h4>
              <small className="text-muted">Pending</small>
            </div>
          </div>
          <div className="col-md-3">
            <div className="bg-light p-4 rounded-3 border border-success border-2">
              <h4 className="mb-0 text-success">{stats.approved}</h4>
              <small className="text-muted">Approved</small>
            </div>
          </div>
          <div className="col-md-3">
            <div className="bg-light p-4 rounded-3 border border-danger border-2">
              <h4 className="mb-0 text-danger">{stats.rejected}</h4>
              <small className="text-muted">Rejected</small>
            </div>
          </div>
        </div>

        {/* No dialects */}
        {filteredDialects.length === 0 ? (
          <div className="text-center my-5">
            <h4>No dialects found</h4>
            <p>
              {dialects.length === 0
                ? "You have not added any dialects yet."
                : "No dialects found for the selected status."}
            </p>
          </div>
        ) : (
        
          <div className="row g-4">
            {filteredDialects.map((dialect, index) => (
              <div key={index} className="col-md-6">
                <div className="card shadow-sm border-0 h-100">
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span
                        className="badge rounded-pill bg-secondary"
                        style={{ fontSize: "12px" }}
                      >
                        {dialect.language?.language || "Unknown"}
                      </span>
                      <span
                        className={`badge rounded-pill px-3 ${
                          dialect.status === "approved"
                            ? "bg-success"
                            : dialect.status === "pending"
                            ? "bg-warning text-dark"
                            : "bg-danger"
                        }`}
                        style={{ fontSize: "12px", textTransform: "capitalize" }}
                      >
                        {dialect.status}
                      </span>
                    </div>
                    <h5 className="fw-bold mt-2 mb-3">{dialect.word}</h5>
                    <div className="mb-2">
                      <span className="fw-semibold">Meaning:</span>{" "}
                      <span className="text-muted">
                        {dialect.meaning?.english || "—"} / {dialect.meaning?.hindi || "—"}
                      </span>
                    </div>
                    {dialect.examples?.length > 0 && (
                      <div className="mb-2">
                        <span className="fw-semibold">Example:</span>{" "}
                        <span className="text-muted">
                          {dialect.examples[0]?.exampleSentence || "—"}
                        </span>
                      </div>
                    )}
                    {dialect.audioLink && (
                      <div className="mb-3">
                        <audio
                          controls
                          src={`${BASE_URL}/audio/${dialect.audioLink}`}
                          style={{ width: "100%" }}
                        >
                          Your browser does not support the audio element.
                        </audio>
                      </div>
                    )}
                    <button
                      onClick={() => handleView(dialect)}
                      className="btn btn-outline-primary btn-sm mt-2"
                    >
                      View Dialect →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default MyDialects;
