// src/components/Dialects/ViewMore.jsx
import { useLocation, useNavigate } from "react-router-dom";
import { BASE_URL } from "../../apis/EndPoint";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function ViewMore() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const dialect = state?.dialect;

  if (!dialect) {
    return (
      <>
        <Header />
        <div className="container py-5 text-center">
          <h4 className="text-danger">No dialect data available</h4>
          <button className="btn btn-outline-primary mt-3" onClick={() => navigate(-1)}>
            ← Go Back
          </button>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="container py-5">
        {/* Back Button */}
        <button className="btn btn-outline-primary mb-4" onClick={() => navigate(-1)}>
          ← Back
        </button>

        {/* Card */}
        <div className="card border-0 shadow-sm rounded-4 p-4">
          {/* Header: Language & Status */}
          <div className="d-flex justify-content-between align-items-center mb-3">
            <span className="badge rounded-pill bg-secondary small">
              {dialect.language?.language || "Unknown"}
            </span>
            <span
              className={`badge rounded-pill px-3 small ${
                dialect.status === "approved"
                  ? "bg-success"
                  : dialect.status === "pending"
                  ? "bg-warning text-dark"
                  : "bg-danger"
              }`}
              style={{ textTransform: "capitalize" }}
            >
              {dialect.status}
            </span>
          </div>

          {/* Word */}
          <h3 className="fw-bold mb-3">{dialect.word}</h3>

          {/* Meaning */}
          <div className="mb-4">
            <h6 className="text-primary fw-semibold mb-2">Meaning</h6>
            <div className="d-flex flex-wrap gap-4">
              <div>
                <span className="text-muted small">English:</span>
                <span className="ms-2">{dialect.meaning?.english || "—"}</span>
              </div>
              <div>
                <span className="text-muted small">Hindi:</span>
                <span className="ms-2">{dialect.meaning?.hindi || "—"}</span>
              </div>
            </div>
          </div>

          {/* Examples */}
          {dialect.examples?.length > 0 && (
            <div className="mb-4">
              <h6 className="text-primary fw-semibold mb-2">Examples</h6>
              <ul className="list-unstyled bg-light rounded-3 p-3">
                {dialect.examples.map((ex, idx) => (
                  <li
                    key={idx}
                    className="mb-3 p-3 rounded-2"
                    style={{
                      background: "#f8f9fa",
                      boxShadow: "0 1px 2px rgba(0,0,0,0.03)",
                    }}
                  >
                    <p className="mb-1 fst-italic">{ex.exampleSentence}</p>
                    <div className="small text-muted">
                      <span className="me-3">
                        <strong>EN:</strong> {ex.exampleMeaning?.english || "—"}
                      </span>
                      <span>
                        <strong>HI:</strong> {ex.exampleMeaning?.hindi || "—"}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Audio */}
          {dialect.audioLink && (
            <div className="mb-4">
              <h6 className="text-primary fw-semibold mb-2">Pronunciation</h6>
              <div className="p-2 rounded-3 border bg-light">
                <audio
                  controls
                  src={`${BASE_URL}/audio/${dialect.audioLink}`}
                  style={{ width: "100%" }}
                >
                  Your browser does not support the audio element.
                </audio>
              </div>
            </div>
          )}

          {/* Author */}
          {dialect.author && (
            <div className="mb-4">
              <h6 className="text-primary fw-semibold mb-2">Author</h6>
              <span>
                {dialect.author.name ||
                  dialect.author.username ||
                  dialect.author.email ||
                  "Unknown"}
              </span>
            </div>
          )}

          {/* Dates */}
          <div>
            <h6 className="text-primary fw-semibold mb-2">Timestamps</h6>
            <div className="small text-muted">
              <div>
                <strong>Created:</strong> {new Date(dialect.createdAt).toLocaleString()}
              </div>
              <div>
                <strong>Updated:</strong> {new Date(dialect.updatedAt).toLocaleString()}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ViewMore;
