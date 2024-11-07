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
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000, //Specify a staleTime to only fetch when the data is older than a certain amount of time:
    },
  },
});

const MainRoutes = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
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
      <Toaster
        position="top-right"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          // Default options for specific types
          success: {
            duration: 3000,
            style: {
              backgroundColor: "var(--color-green-700)",
              color: "white",
            },
          },
          error: {
            duration: 3000,
            style: {
              backgroundColor: "var(--color-red-700)",
              color: "white",
            },
          },

          style: {
            fontSize: "12px",
            maxWidth: "500px",
            padding: "12px 20px",
            fontWeight: 500,
          },
        }}
      />
    </QueryClientProvider>
  );
};
export default MainRoutes;
