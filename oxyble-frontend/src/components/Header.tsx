import { Link } from "react-router-dom";
import "./css/Header.css";
import UserScore from "./UserScore";
import { User } from "../types/user";
import { useLocation } from "react-router-dom";
export default function Header({ user }: { user: User }) {
  const location = useLocation();
  return (
    <header className="header">
      <div
        className="header-container"
        style={{
          justifyContent:
            location.pathname === "/profile" ? "center" : "space-between",
        }}
      >
        <div className="header-logo">
          <Link
            to="/"
            style={{
              fontSize: location.pathname === "/profile" ? 40 : 24,
            }}
          >
            OxyMiner
          </Link>
        </div>
        {location.pathname !== "/profile" ? <UserScore user={user} /> : null}
      </div>
    </header>
  );
}
