import { createBrowserRouter, Navigate } from "react-router-dom";
import { AppLayout } from "../components/layout/AppLayout";
import { ConnectionMatchPage } from "../pages/ConnectionMatchPage";
import { ConnectionsPage } from "../pages/ConnectionsPage";
import { HomePage } from "../pages/HomePage";
import { MatchPage } from "../pages/MatchPage";
import { MatchResultPage } from "../pages/MatchResultPage";
import { OnboardingPage } from "../pages/OnboardingPage";
import { ProfilePage } from "../pages/ProfilePage";
import { useOnboardingStore } from "../store/useOnboardingStore";

const getInitialRoute = (): string => {
  const profileCompleted = useOnboardingStore.getState().hasCompletedOnboarding;
  return profileCompleted ? "/home" : "/onboarding";
};

export const router = createBrowserRouter(
  [
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
        { path: "/connection/:id", element: <ConnectionMatchPage /> },
        { path: "/connections", element: <ConnectionsPage /> },
        { path: "/profile", element: <ProfilePage /> },
      ],
    },
  ],
  {
    basename: import.meta.env.BASE_URL,
  },
);
