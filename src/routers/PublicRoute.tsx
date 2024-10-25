import { Navigate, Outlet } from "react-router-dom";
const PublicRoute = () => {
  const auth = false;

  return auth ? <Navigate to={"/dashboard"} /> : <Outlet />;
};

export default PublicRoute;
