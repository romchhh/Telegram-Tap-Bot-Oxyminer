import Header from "../components/Header";
import { User } from "../types/user";
import { Outlet } from "react-router-dom";
import MenuBar from "../components/MenuBar";

export default function Root({ user }: { user: User }) {
  // Додано деструктуризацію і типізацію
  return (
    <div className="root-layout">
      <Header user={user} />
      <div className="main-content">
        <Outlet />
      </div>
      <MenuBar />
    </div>
  );
}
