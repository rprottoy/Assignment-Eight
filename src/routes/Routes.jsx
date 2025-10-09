import React from "react";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from "../Root/Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import AllApps from "../Pages/AllApps/AllApps";
import AppDetails from "../Pages/AppDetails/AppDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        loader: () => fetch("appData.json"),
        path: "/",
        Component: Home,
      },
      {
        path: "/allApps",
        Component: AllApps,
      },
      {
        path: "/appDetails/:id",
        loader: () => fetch("appData.json"),
        Component: AppDetails,
      },
      {
        path: "/*",
        Component: ErrorPage,
      },
    ],
  },
]);
