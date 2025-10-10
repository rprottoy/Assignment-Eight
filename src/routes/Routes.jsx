import React from "react";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from "../Root/Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
// import AllApps from "../Pages/AllApps/AllApps";
import AppDetails from "../Pages/AppDetails/AppDetails";
import AllAppsRoot from "../Pages/AllApps/AllAppsRoot";
import AllAppsMain from "../Pages/AllApps/AllAppsMain";
import SearchPage from "../Pages/SearchPage/SearchPage";
import AppNotFound from "../Pages/AppNotFound/AppNotFound";
import Installations from "../Components/Installation/Installations";
// import Installations from "../Components/Installation/Installations";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    hydrateFallbackElement: <p>Loading...</p>,
    children: [
      {
        index: true,
        loader: () => fetch("/appData.json"),
        path: "/",
        Component: Home,
      },
      {
        path: "/allAppsRoot",
        loader: () => fetch("/allAppData.json"),
        Component: AllAppsRoot,
      },

      {
        path: "/appDetails/:id",
        loader: () => fetch("/appData.json"),
        Component: AppDetails,
      },
      {
        path: "/appNotFound",
        Component: AppNotFound,
      },
      {
        path: "/*",
        Component: ErrorPage,
      },
      {
        path: "/installations",
        Component: Installations,
      },
    ],
  },
]);
