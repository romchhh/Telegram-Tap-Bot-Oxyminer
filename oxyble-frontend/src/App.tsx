import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import Home from "./pages/Home";
import ProfilePage from "./pages/ProfilePage";
import RoadMapPage from "./pages/RoadMapPage";
import FriendsPage from "./pages/FriendsPage";
export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        { index: true, element: <Home /> },
        { path: "/roadmap", element: <RoadMapPage /> },
        { path: "/friends", element: <FriendsPage /> },
        { path: "/profile", element: <ProfilePage /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}
