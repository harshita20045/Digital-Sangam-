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
        <div className="collapse navbar-collapse" id="navbarNav" >
          <ul className="navbar-nav ml-5" style={{color:"#000000"}}>
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
              <Link className="nav-link" to="/articles">
                Articles
              </Link>
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
          <Link className="btn btn-dark ml-2 fw-semibold text-center"  style={{height:"35px",fontSize:"15px"}} to="/login">Login</Link>
          <Link className="btn btn-dark ml-2 fw-semibold" style={{height:"35px",fontSize:"15px"}} to="/sign-up">Sign Up</Link>
        </div>
      </div>
    </>
  );
}

export default Header;
