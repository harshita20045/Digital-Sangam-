import { Link } from "react-router-dom";
import "./Header.css";
import image from "../../images/image.png";
function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg  my-navbar">
        <div className="container-fluid justify-content-between align-items-center">
          <Link className="navbar-brand" to="/" style={{ marginLeft: "20px" }}>
            <img
              src={image}
              alt="Brand Logo"
              style={{marginTop:"0px", height: "70px", width: "130px" }}
            />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <Link className="nav-link  active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link  active" aria-current="page" to="/about">
                  About
                </Link>
              </li>{" "}
              <li className="nav-item">
                <Link className="nav-link  active" aria-current="page" to="/dialects">
                  Explore Dialects
                </Link>
              </li>{" "}
              <li className="nav-item">
                <Link className="nav-link  active" aria-current="page" to="/tribes">
                  Tribes
                </Link>
              </li>{" "}
              <li className="nav-item">
                <Link className="nav-link  active" aria-current="page" to="/articles">
                  Articles
                </Link>
              </li>{" "}
              <li className="nav-item">
                <Link className="nav-link  active" aria-current="page" to="/">
                  Quizzes
                </Link>
              </li>{" "}
              <li className="nav-item">
                <Link className="nav-link  active" aria-current="page" to="/gallary">
                  Gallary
                </Link>
              </li>{" "}
              <li className="nav-item">
                <Link className="nav-link  active" aria-current="page" to="/contact">
                  Contact
                </Link>
              </li>{" "}
              <li className="nav-item">
                <Link className="nav-link  active" aria-current="page" to="/help">
                  Help
                </Link>
              </li>
            </ul>

            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
              <button
                class="btn btn-dark me-md-2"
                type="button"
                style={{
                  height: "30px",
                  textAlign: "center",
                  fontSize: "12px",
                }}
              >
                Login
              </button>
              <button
                class="btn btn-dark"
                type="button"
                style={{
                  height: "30px",
                  textAlign: "center",
                  fontSize: "12px",
                }}
              >
                SignUp
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Header;
