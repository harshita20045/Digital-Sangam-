import "./Footer.css";
import logo from '../../images/footer.png'; 

function Footer() {
  return <>

    <footer className="footer-main">
      <div className="footer-container">
        <div className="footer-left">
          <div className="footer-logo">
            <img src={logo} alt="Digital Sangam" style={{ height:"70px",width:"180px"}} />
           
          </div>
          <p className="footer-description">
            Preserving and celebrating India's rich cultural heritage through digital innovation.
            Connecting communities, languages, and traditions for future generations.
          </p>
          <div className="footer-contact">
            <p>📧 contact@digitalsangam.org</p>
            <p>📞 +91 7470361548</p>
            <p>📍 Indore, India</p>
          </div>
          <div className="footer-icons">
            <a href="#"><i className="fab fa-whatsapp"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
          </div>
        </div>

        <div className="footer-links d-flex justify-content-between align-items-start flex-wrap ml-5 mt-2">
          <div>
            <h5>Explore</h5>
            <a href="#">Indian Dialects</a>
            <a href="#">Tribal Heritage</a>
            <a href="#">Cultural Articles</a>
            <a href="#">Media Gallery</a>
          </div>
          <div>
            <h5>Learn</h5>
            <a href="#">Cultural Quizzes</a>
            <a href="#">About Us</a>
            <a href="#">Help & FAQs</a>
            <a href="#">Contact Us</a>
          </div>
          <div>
            <h5>Connect</h5>
            <a href="#">Community</a>
            <a href="#">Newsletter</a>
            <a href="#">Events</a>
            <a href="#">Partnerships</a>
          </div>
        </div>
      </div>

      <hr />

      <div className="footer-bottom">
        <p>© 2025 Digital Sangam. All rights reserved. Made with ❤️ for Indian Culture.</p>
        <div>
          <a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  </>
}

export default Footer;
