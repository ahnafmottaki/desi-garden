import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ShareATip from "../pages/ShareATip";
import PrivateRoute from "../components/PrivateRoute";
import BrowseTips from "../pages/BrowseTips";
import fetchData from "../utils/fetchData/fetchData";
import TipDetailsPage from "../pages/TipDetailsPage";
import MyTips from "../pages/MyTips";
import EditTipPage from "../pages/EditTipPage";
import ExplorePage from "../pages/ExplorePage";
import NotFound from "../pages/NotFound";
import Dashboard from "../pages/Dashboard/Dashboard";
import Index from "../pages/Dashboard/children/Index";
import ViewTips from "../pages/Dashboard/children/ViewTips";
import Loader from "../components/Loader";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    errorElement: <NotFound />,
    children: [
      { index: true, Component: Home },
      {
        path: "shareTip",
        element: (
          <PrivateRoute>
            <ShareATip />
          </PrivateRoute>
        ),
      },
      {
        path: "explore",
        Component: ExplorePage,
        loader: () =>
          fetchData(
            "exploreGardenerPromise",
            "https://desi-gardening.vercel.app/home/explore"
          ),
      },
      {
        path: "editTip/:tipId",
        element: (
          <PrivateRoute>
            <EditTipPage />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            "https://desi-gardening.vercel.app/user/tipDetail/" + params.tipId
          ),
      },
      {
        path: "browseTips",
        Component: BrowseTips,
        loader: () =>
          fetchData(
            "tipsPromise",
            "https://desi-gardening.vercel.app/home/browseTips"
          ),
      },
      {
        path: "tipDetail/:tipId",
        element: (
          <PrivateRoute>
            <TipDetailsPage />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetchData(
            "tipPromise",
            "https://desi-gardening.vercel.app/user/tipDetail/" + params.tipId
          ),
      },
      {
        path: "myTips",
        element: (
          <PrivateRoute>
            <MyTips />
          </PrivateRoute>
        ),
      },
      { path: "login", Component: Login },
      { path: "register", Component: Register },
    ],
  },
  {
    path: "/dashboard",
    loader: () =>
      fetchData(
        "tipsPromise",
        "https://desi-gardening.vercel.app/home/browseTips"
      ),
    id: "dashboard",
    hydrateFallbackElement: <Loader />,
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: <Index />,
      },
      { path: "viewtips", element: <ViewTips /> },
    ],
  },
]);
export default router;
