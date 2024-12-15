import { Link } from "react-router-dom";
import "./css/Header.css";
import UserScore from "./UserScore";
import { User } from "../types/user";
export default function Header({ user }: { user: User }) {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-logo">
          <Link to="/">Logo</Link>
        </div>
        <UserScore user={user} />
      </div>
    </header>
  );
}
