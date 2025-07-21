import {
  FaBookOpen,
  FaGlobeAsia,
  FaUsers,
  FaMusic,
  FaCamera,
  FaStar,
} from "react-icons/fa";

function What() {
  return (
    <div className="container py-5">
      <h1 className="text-center text-brown" style={{ fontWeight: "400" }}>
        What Digital Sangam Offers
      </h1>
      <p className="text-center text-muted mt-2">
        A comprehensive platform to explore, learn, and preserve India's
        incredible cultural diversity.
      </p>

      <div className="row mt-5 g-4">
       
        <div className="col-sm-12 col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm text-center p-4">
            <FaBookOpen size={30} color="#e74c00" className="mb-3" />
            <h5 className="fw-bold">Rich Content Library</h5>
            <p className="text-muted">
              Explore thousands of articles about Indian culture, traditions,
              and heritage.
            </p>
          </div>
        </div>

        <div className="col-sm-12 col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm text-center p-4">
            <FaGlobeAsia size={30} color="#e74c00" className="mb-3" />
            <h5 className="fw-bold">Language Diversity</h5>
            <p className="text-muted">
              Discover dialects and languages from every corner of India with
              audio samples.
            </p>
          </div>
        </div>

     
        <div className="col-sm-12 col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm text-center p-4">
            <FaUsers size={30} color="#e74c00" className="mb-3" />
            <h5 className="fw-bold">Tribal Heritage</h5>
            <p className="text-muted">
              Learn about India's diverse tribal communities and their unique
              traditions.
            </p>
          </div>
        </div>

       
        <div className="col-sm-12 col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm text-center p-4">
            <FaMusic size={30} color="#e74c00" className="mb-3" />
            <h5 className="fw-bold">Cultural Performances</h5>
            <p className="text-muted">
              Watch traditional dances, music, and performances from different
              regions.
            </p>
          </div>
        </div>

       
        <div className="col-sm-12 col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm text-center p-4">
            <FaCamera size={30} color="#e74c00" className="mb-3" />
            <h5 className="fw-bold">Visual Stories</h5>
            <p className="text-muted">
              Browse through stunning photography showcasing India's cultural
              beauty.
            </p>
          </div>
        </div>

     
        <div className="col-sm-12 col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm text-center p-4">
            <FaStar size={30} color="#e74c00" className="mb-3" />
            <h5 className="fw-bold">Interactive Learning</h5>
            <p className="text-muted">
              Test your knowledge with fun cultural quizzes and educational
              games.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default What;
