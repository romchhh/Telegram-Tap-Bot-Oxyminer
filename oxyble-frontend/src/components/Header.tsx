import { Link } from "react-router-dom";
import "./css/Header.css";
import UserScore from "./UserScore";
export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-logo">
          <Link to="/">Logo</Link>
        </div>
        <UserScore />
      </div>
    </header>
  );
}
