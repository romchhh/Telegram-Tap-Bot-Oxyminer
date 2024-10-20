import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
export default function Root() {
  const location = useLocation();
  return (
    <div className="root-layout">
      <Header />
      <div className="main-content">
        <Outlet />
      </div>
      {location.pathname !== "/profile" && <Footer />}
    </div>
  );
}
