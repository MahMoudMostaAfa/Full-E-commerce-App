import { useUser } from "../features/authentication/useUser";
import Spinner from "../ui/Spinner";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ProtectedRoutes({ children }) {
  const navigate = useNavigate();
  // load the authenticated user
  const { isAuthenticated, isLoading } = useUser();
  // if the user is not authenticated, redirect to the login page
  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      navigate("/login");
    }
  }, [isLoading, isAuthenticated, navigate]);
  // if loading show a spinner
  if (isLoading) return <Spinner />;
  if (!isLoading && !isAuthenticated) return null;
  // if the user is authenticated, show the app
  return isAuthenticated && children;
}

export default ProtectedRoutes;
