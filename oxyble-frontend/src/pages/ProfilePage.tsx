import "./css/ProfilePage.css";
import { User } from "../types/user";
import { NftItem } from "../components/NftItem";
export default function ProfilePage({ user }: { user: User }) {
  return (
    <>
      <div className="profile-page">
        <div className="profile-page-container">
          <div className="profile-page-ava">
            <img src={user.avatar} alt="" />
          </div>
          <div className="profile-page-info">
            <div className="profile-page-info-name">{user.name}</div>
            <div className="profile-page-info-score">
              <div className="profile-page-info-level">Level: {user.level}</div>
              <div className="profile-page-info-nft">
                NFTs: {user.nftList.length}
              </div>
              <div className="profile-page-info-friends">
                Frinds: {user.friends.length}
              </div>
            </div>
          </div>
        </div>
        <div className="nft-list-container">
          <h1 className="nft-list-header">NFTs</h1>
          <ul className="nft-list">
            {user.nftList.map((nft, index) => (
              <NftItem nft={nft} key={index} />
            ))}
          </ul>
        </div>
      </div>
      <div style={{ height: 110 }} />
    </>
  );
}