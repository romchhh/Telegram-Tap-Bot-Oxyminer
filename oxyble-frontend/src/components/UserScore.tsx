import "./css/UserScore.css";
import { Link } from "react-router-dom";
export default function UserScore() {
  return (
    <div className="user-score-container">
      <div className="user-score">Score: 100</div>
      <Link to="/profile">
        <div className="user-score-info">
          <img src="https://via.placeholder.com/50" alt="User" />
          <div className="user-score-name">John Doe</div>
        </div>
      </Link>
    </div>
  );
}
