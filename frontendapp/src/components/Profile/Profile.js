import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import {
  FaCheckCircle,
  FaMapMarkerAlt,
  FaPhone,
  FaGlobe,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { getCurrentUser } from "../auth/Auth";
import { useNavigate } from "react-router-dom";

function Profile() {
  const user = getCurrentUser();
  let navigate=useNavigate()
const handleEdit=async (event)=>{
event.preventDefault()
navigate("/edit-profile")
}
  const {
    name,
    email,
    isVerified,
    contact,
    createdAt,
    profile = {},
  } = user || {};

  const {
    profileImage,
    location = "Not specified",
    bio = "No bio provided.",
    website,
  } = profile;

  const formattedDate = createdAt
    ? new Date(createdAt).toLocaleString("en-US", {
        month: "long",
        year: "numeric",
      })
    : "N/A";

  return (
    <>
      <Header />

      <div className="container py-5">
      
        <div className="card shadow-sm border-0 mb-4 rounded-4">
          <div
            className="rounded-top"
            style={{
              background: "linear-gradient(to right, #ff4e00, #ec9f05)",
              height: "120px",
            }}
          ></div>
          <div className="card-body text-center mt-n5">
            <img
              src={
                profileImage ||
                "https://via.placeholder.com/100?text=No+Image"
              }
              alt="User"
              className="rounded-circle border border-3 border-white"
              style={{ width: "100px", marginTop: "-50px" }}
            />

            <h4 className="mt-3 fw-bold">
              {name || "Unnamed User"}{" "}
              {isVerified && (
                <FaCheckCircle color="green" size={18} title="Verified" />
              )}
            </h4>
            <p className="text-muted mb-1">
              {email || "No email"} · {location} · Joined {formattedDate}
            </p>
            <p className="text-secondary small mb-3">{bio}</p>
            <div className="d-flex justify-content-center gap-2 mb-3">
              <button onClick={handleEdit} className="btn btn-sm btn-outline-danger">
                Edit Profile
              </button>
              
            </div>
          </div>
        </div>

       
        <div className="row text-center mb-4">
          <div className="col-6 col-md-2 mb-3">
            <div className="p-3 border rounded shadow-sm bg-white">
              <h5 className="fw-bold">My Dialects</h5>
              <small className="text-muted">12</small>
            </div>
          </div>
          <div className="col-6 col-md-2 mb-3">
            <div className="p-3 border rounded shadow-sm bg-white">
              <h5 className="fw-bold">My Articles</h5>
              <small className="text-muted">12</small>
            </div>
          </div>
        </div>

        <div className="row g-4">
         
          <div className="col-md-4">
            <div className="card border-0 shadow-sm rounded-4 p-3 h-100">
              <h6>📞 Contact Information</h6>
              <div className="small text-muted mt-3">
                <p>
                  <MdEmail className="me-2 text-warning" /> {email || "N/A"}
                </p>
                <p>
                  <FaPhone className="me-2 text-primary" />{" "}
                  {contact || "Not provided"}
                </p>
                <p>
                  <FaMapMarkerAlt className="me-2 text-success" />{" "}
                  {location || "Not specified"}
                </p>
                <p>
                  <FaGlobe className="me-2 text-info" />{" "}
                  {website ? (
                    <a
                      href={website}
                      target="_blank"
                      rel="noreferrer"
                      className="text-decoration-none"
                    >
                      {website}
                    </a>
                  ) : (
                    "No website"
                  )}
                </p>
              </div>
            </div>
          </div>

      
          <div className="col-md-4">
            <div className="card border-0 shadow-sm rounded-4 p-3 h-100">
              <h6>👤 About Me</h6>
              <p className="small text-muted mt-3">{bio}</p>
            </div>
          </div>

         
          <div className="col-md-4">
            <div className="card border-0 shadow-sm rounded-4 p-3 h-100">
              <h6>🏅 Badges</h6>
              {user.badges && user.badges.length > 0 ? (
                <ul className="small mt-3">
                  {user.badges.map((badge, index) => (
                    <li key={index}>{badge}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-muted small mt-3">No badges earned yet.</p>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Profile;
