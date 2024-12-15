import "./css/UserScore.css";
import { Link } from "react-router-dom";
import { User } from "../types/user";
export default function UserScore({ user }: { user: User }) {
  return (
    <div className="user-score-container">
      <div className="user-score">Level: {user.level}</div>
      <Link to="/profile">
        <div className="user-score-info">
          <img src={user.avatar} alt="" />
          <div className="user-score-name">{user.name}</div>
        </div>
      </Link>
    </div>
  );
}
