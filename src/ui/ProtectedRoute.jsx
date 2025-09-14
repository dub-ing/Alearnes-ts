import { useEffect } from "react";
import { useProfile } from "../features/authentication/useProfile";
import { useNavigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  //1. load the authenticates user
  const { isLoading, isAuthenticated } = useProfile();
  console.log(isAuthenticated);

  // 2 Check if user is authenticated, if NO redirect user to login page
  useEffect(() => {
    if (!isAuthenticated && !isLoading) {
      navigate("/signin");
    }
  }, [isAuthenticated, isLoading, navigate]);

  // 3. While loading, show spinner/loader
  if (isLoading) return <div>Loading...</div>;

  // 3

  if (isAuthenticated) return children;
}

export default ProtectedRoute;
