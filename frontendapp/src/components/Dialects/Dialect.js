import { useEffect, useState, useRef } from "react";
import { FaBookOpen } from "react-icons/fa";
import { FiFilter } from "react-icons/fi";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import axios from "axios";
import EndPoint, { BASE_URL } from "../../apis/EndPoint";

function Dialect() {
  const [lang, setLang] = useState([]);
  const [dialects, setDialect] = useState([]);
  const [allDialects, setAllDialects] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState("All");
  const audioRefs = useRef({});

  useEffect(() => {
    loadDialects();
  }, []);

  const loadDialects = async () => {
    try {
      let response = await axios.get(EndPoint.DIALECT_LIST);
      let language = await axios.get(EndPoint.LANGUAGE_LIST);
      setLang(language.data.languageName || []);
      setAllDialects(response.data.dialects || []);
      setDialect(response.data.dialects || []);
    } catch (error) {
      console.error("Failed to load dialects:", error);
    }
  };

  const handleFilter = (language) => {
    if (language === "All") {
      setDialect(allDialects);
    } else {
      const filtered = allDialects.filter(
        (dialect) =>
          dialect.language?.language === language || // if API returns object
          dialect.language === language // if API returns string
      );
      setDialect(filtered);
    }
  };

  const playAudio = (index) => {
    const audioEl = audioRefs.current[index];
    if (audioEl) {
      audioEl.currentTime = 0;
      audioEl.play().catch((err) => console.warn("Play error:", err));
    }
  };

  return (
    <>
      <Header />

      <div className="py-5" style={{ backgroundColor: "#fef6f0" }}>
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold d-flex justify-content-center align-items-center gap-2">
              <FaBookOpen className="text-danger" />
              Explore Dialects
            </h2>
            <p className="text-muted">
              Discover words, meanings, and pronunciations from India's diverse
              languages
            </p>
            <div className="d-flex justify-content-center gap-3 text-muted small mt-2">
              <span>📚 {lang.length} Languages</span>
              <span>🔊 {allDialects.length} Dialect Words</span>
              <span>🧑‍🤝‍🧑 Community Contributed</span>
            </div>
          </div>

          {/* Search + Filter */}
          <div className="row justify-content-center mb-4">
            <div className="col-md-6 mb-2">
              <input
                type="text"
                className="form-control"
                placeholder="Search languages, regions, or words..."
              />
            </div>
            <div className="col-auto">
              <div className="input-group">
                <span className="input-group-text">
                  <FiFilter />
                </span>
                <select
                  className="form-select"
                  value={selectedLanguage}
                  onChange={(e) => {
                    setSelectedLanguage(e.target.value);
                    handleFilter(e.target.value);
                  }}
                >
                  <option value="All">All Languages</option>
                  {lang.map((lan, index) => (
                    <option key={index} value={lan.language}>
                      {lan.language}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Dialects Grid */}
          {dialects.length === 0 ? (
            <p className="text-center text-muted">No dialects found.</p>
          ) : (
            <div className="row g-4">
              {dialects.map((dialect, index) => (
                <div className="col-md-6 col-lg-4" key={index}>
                  <div
                    className="card border-0 shadow-sm rounded-4 p-3"
                    style={{ background: "#fff" }}
                  >
                    {/* Word & Audio */}
                    <div className="d-flex justify-content-between align-items-center">
                      <span className="badge bg-success">New</span>
                      {dialect.audioLink && (
                        <button
                          className="btn btn-light rounded-circle p-2 shadow-sm"
                          style={{ border: "1px solid #ddd" }}
                          onClick={() => playAudio(index)}
                        >
                          ▶
                        </button>
                      )}
                      {dialect.audioLink && (
                        <audio
                          ref={(el) => (audioRefs.current[index] = el)}
                        >
                          <source
                            src={`${BASE_URL}/audio/${dialect.audioLink}`}
                            type="audio/mpeg"
                          />
                        </audio>
                      )}
                    </div>

                    <h4 className="fw-bold mt-2">{dialect.word}</h4>

                    {/* English Meaning */}
                    <div
                      className="p-2 rounded-3 mb-2"
                      style={{ background: "#eaf3ff" }}
                    >
                      <small className="fw-bold text-primary">
                        🔊 ENGLISH MEANING
                      </small>
                      <p className="mb-0">
                        {dialect.meaning?.english || "—"}
                      </p>
                    </div>

                    {/* Hindi Meaning */}
                    <div
                      className="p-2 rounded-3 mb-2"
                      style={{ background: "#fff5e0" }}
                    >
                      <small className="fw-bold text-warning">
                        🔊 HINDI MEANING
                      </small>
                      <p className="mb-0">
                        {dialect.meaning?.hindi || "—"}
                      </p>
                    </div>

                    {/* Example */}
                    {dialect.examples?.length > 0 && (
                      <div
                        className="p-2 rounded-3 mb-2"
                        style={{ background: "#fef8f3" }}
                      >
                        <small className="fw-bold text-secondary">
                          📖 EXAMPLE
                        </small>
                        <p className="mb-0">
                          {dialect.examples[0].exampleSentence}
                        </p>
                        {dialect.examples[0].exampleMeaning && (
                          <small className="text-muted">
                            — {dialect.examples[0].exampleMeaning.english}
                          </small>
                        )}
                      </div>
                    )}

                    {/* Language & Author */}
                    <div className="d-flex justify-content-between align-items-center mt-3">
                      <span className="badge bg-warning text-dark">
                        {dialect.languageName ||
                          dialect.language?.language ||
                          dialect.language}
                      </span>
                      <span className="text-muted small">
                        {dialect.author?.name || "Unknown"}
                      </span>
                    </div>

                    {/* View More Button */}
                    <button className="btn btn-danger rounded-pill mt-3 w-100">
                      View More →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Dialect;
