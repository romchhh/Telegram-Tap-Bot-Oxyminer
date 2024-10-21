import { Link } from "react-router-dom";
import { MdAccountCircle } from "react-icons/md";
import { GiMining } from "react-icons/gi";
import { FaMap, FaUserFriends } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import "./css/MenuBar.css";
export default function MenuBar() {
  const location = useLocation();
  const menuBarLinks = [
    {
      link: "/",
      label: "Mining",
      icon: <GiMining />,
    },
    {
      link: "/roadmap",
      label: "RoadMap",
      icon: <FaMap />,
    },
    {
      link: "/friends",
      label: "Friends",
      icon: <FaUserFriends />,
    },
    {
      link: "/profile",
      label: "Profile",
      icon: <MdAccountCircle />,
    },
  ];
  const renderMenuBarLinks = menuBarLinks.map((menuBarLink) => (
    <Link
      className="menu-bar-link"
      to={menuBarLink.link}
      key={menuBarLink.label}
    >
      <div
        className={`menu-bar-link-info ${
          location.pathname === menuBarLink.link ? "active" : ""
        }`}
      >
        <div className="menu-bar-link-icon">{menuBarLink.icon}</div>
        <div className="menu-bar-link-label">{menuBarLink.label}</div>
      </div>
    </Link>
  ));
  return <nav className="menu-bar">{renderMenuBarLinks}</nav>;
}
