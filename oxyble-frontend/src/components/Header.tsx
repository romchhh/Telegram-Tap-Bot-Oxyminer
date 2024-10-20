import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import "./css/Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-logo">
          <Link to="/">MyLogo</Link>
        </div>
        <nav className="header-menu">
          <Link className="header-link" to="#">
            About Us
          </Link>
          <Link className="header-link" to="#">
            Services
          </Link>
          <Link className="header-link menu" to="/profile">
            <CgProfile />
          </Link>
        </nav>
      </div>
    </header>
  );
}
