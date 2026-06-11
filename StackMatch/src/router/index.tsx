import { createBrowserRouter, Navigate } from "react-router-dom";
import AppLayout from "../components/layout/AppLayout";
import ConnectionsPage from "../pages/ConnectionsPage";
import HomePage from "../pages/HomePage";
import MatchPage from "../pages/MatchPage";
import MatchResultPage from "../pages/MatchResultPage";
import OnboardingPage from "../pages/OnboardingPage";
import ProfilePage from "../pages/ProfilePage";

function getInitialRoute(): string {
  try {
    const profile = localStorage.getItem("stackmatch_profile");
    return profile ? "/home" : "/onboarding";
  } catch {
    return "/onboarding";
  }
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to={getInitialRoute()} replace />,
  },
  {
    path: "/onboarding",
    element: <OnboardingPage />,
  },
  {
    element: <AppLayout />,
    children: [
      { path: "/home", element: <HomePage /> },
      { path: "/match", element: <MatchPage /> },
      { path: "/match/:id", element: <MatchResultPage /> },
      { path: "/connections", element: <ConnectionsPage /> },
      { path: "/profile", element: <ProfilePage /> },
    ],
  },
]);

export default router;
