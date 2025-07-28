import { Link } from "react-router-dom";
import logo from "../../images/logoHeader.png";
function Header() {
  return (
    <>
      <div className="navbar navbar-expand-lg navbar-light bg-white shadow-sm p-3 mb-2 rounded d-flex  align-items-center ">
        <img
          src={logo}
          alt="Logo"
          className="navbar-brand  ml-5"
          style={{ width: "200px", height: "auto" }}
        />
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-5">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
             

            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Explore Dialects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Articles
              </a>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/help">
                Help
              </Link>
            </li>
            
          </ul>
        </div>
        <div>
          <button className="btn btn-dark ml-2">Login</button>
          <button className="btn btn-dark ml-2">Sign Up</button>
        </div>
      </div>
    </>
  );
}

export default Header;
