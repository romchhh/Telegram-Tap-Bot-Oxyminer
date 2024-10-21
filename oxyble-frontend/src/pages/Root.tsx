import Header from "../components/Header";

import { Outlet } from "react-router-dom";
import MenuBar from "../components/MenuBar";

export default function Root() {
  return (
    <div className="root-layout">
      <Header />
      <div className="main-content">
        <Outlet />
      </div>
      <MenuBar />
    </div>
  );
}
