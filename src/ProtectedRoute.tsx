import { Navigate, useLocation } from "react-router-dom";
import useToken from "./hooks/useToken";

type ProtectedRouteProps = {
  element: React.ReactElement;
};

const ProtectedRoute = ({ element }: ProtectedRouteProps) => {
  const { token } = useToken();
  const location = useLocation();

  if (!token) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return element;
};

export default ProtectedRoute;
