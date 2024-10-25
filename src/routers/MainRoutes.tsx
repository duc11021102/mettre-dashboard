import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import GlobalStyles from "../styles/GlobalStyles";
import PublicRoute from "./PublicRoute";
import Dashboard from "../pages/Dashboard";
import Account from "../pages/Account";
import Cabins from "../pages/Cabins";
import Bookings from "../pages/Bookings";
import Login from "../pages/Login";
import Settings from "../pages/Settings";
import NewUsers from "../pages/Users";
import PageNotFound from "../pages/PageNotFound";
import InnerContent from "./InnerContent";

const MainRoutes = () => {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<InnerContent />}>
            <Route index element={<Navigate replace to="dashboard" />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="account" element={<Account />} />
            <Route path="cabins" element={<Cabins />} />
            <Route path="bookings" element={<Bookings />} />
            <Route path="settings" element={<Settings />} />
            <Route path="new-users" element={<NewUsers />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>

          <Route path="login" element={<PublicRoute />}>
            <Route path="" element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default MainRoutes;
