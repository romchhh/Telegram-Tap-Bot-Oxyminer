import { UserFriends } from "../types/userFriends";
import "./css/FriendsPageItem.css";
export default function FriendsPageItem({ friend }: { friend: UserFriends }) {
  return (
    <li className="friendspage-list-item">
      <div className="friendspage-list-item-info">
        <img
          className="friendspage-list-item-image"
          src={friend.avatar}
          alt=""
        />
        <div>
          <div className="friendspage-list-item-name">{friend.name}</div>
          <div className="friendspage-list-item-level">
            {`Level: ${friend.level}`}
          </div>
        </div>
      </div>
      <div>
        <button className="share-score-btn">Share Score</button>
      </div>
    </li>
  );
}
