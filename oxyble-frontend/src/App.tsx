// App.tsx
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState } from "react";
import Root from "./pages/Root";
import Home from "./pages/Home";
import ProfilePage from "./pages/ProfilePage";
import RoadMapPage from "./pages/RoadMapPage";
import FriendsPage from "./pages/FriendsPage";

export default function App() {
  const points = [1, 2, 5, 10, 25, 50, 100, 250, 500, 1000];
  const goals = [
    { level: 1, goal: 100 },
    { level: 2, goal: 500 },
    { level: 3, goal: 2500 },
    { level: 4, goal: 7500 },
    { level: 5, goal: 15000 },
    { level: 6, goal: 30000 },
    { level: 7, goal: 50000 },
    { level: 8, goal: 100000 },
    { level: 9, goal: 250000 },
    { level: 10, goal: 500000 },
  ];

  const [user, setUser] = useState({
    id: 1,
    name: "Test 1",
    avatar: "https://avatars.dicebear.com/api/avataaars/johndoe.svg",
    friends: 5,
    level: 1,
    points: 0,
  });

  const updateUser = (updatedUser) => {
    setUser((prevUser) => ({ ...prevUser, ...updatedUser }));
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root user={user} />,
      children: [
        {
          index: true,
          element: (
            <Home
              points={points}
              goals={goals}
              user={user}
              updateUser={updateUser}
            />
          ),
        },
        { path: "/roadmap", element: <RoadMapPage /> },
        { path: "/friends", element: <FriendsPage /> },
        { path: "/profile", element: <ProfilePage /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
