import "./global.scss";

import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Error, LandingPage } from "./pages/";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
    errorElement: <Error />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
