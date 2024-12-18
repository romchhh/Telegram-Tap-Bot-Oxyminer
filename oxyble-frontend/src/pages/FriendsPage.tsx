import { User } from '../types/user';
import FriendsPageItem from '../components/FriendsPageItem';
import './css/FriendsPage.css';
export default function FriendsPage({ user }: { user: User }) {
  return (
    <div>
      <div>
        <h1 className="friends-page-header">Your Friends</h1>
        <p className="friends-page-discription">
          Here you can see your friends and their scores.
        </p>
      </div>
      <div className="friends-page-list">
        <h3 className="friends-page-list-number">
          Number of friends: {user.friends.length}
        </h3>
        <ul>
          {user.friends.map((friend, index) => (
            <div key={index}>
              <FriendsPageItem friend={friend} />
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}
