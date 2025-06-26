import { Navigate, useLocation } from "react-router";
import useAuthContext from "../contexts/AuthContext/AuthContext";
import Loader from "./Loader";

export default function PrivateRoute({ children }) {
  const { user, loading } = useAuthContext();
  const location = useLocation();
  if (loading) return <Loader />;
  if (!user)
    return (
      <Navigate
        to={"/login"}
        state={{ lastVisited: location.pathname }}
      ></Navigate>
    );

  return <>{children}</>;
}
