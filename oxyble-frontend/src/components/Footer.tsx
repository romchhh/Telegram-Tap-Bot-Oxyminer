import "./css/Footer.css";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-text">
          &copy; {new Date().getFullYear()} My Company.
        </p>
        <div className="footer-links">
          <a href="#" className="footer-link">
            About Us
          </a>
          <a href="#" className="footer-link">
            Contact
          </a>
          <a href="#" className="footer-link">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}
