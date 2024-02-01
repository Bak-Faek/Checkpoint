import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import CandlePage from "./pages/CandlePage";
import AdminPage from "./pages/AdminPage";
import AdminAddForm from "./components/Admin/Add/AddForm";
import LoginPage from "./pages/LogInPage";
import AboutPage from "./pages/AboutPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/candle/:id",
    element: <CandlePage />,
  },
  {
    path: "/admin",
    element: <AdminPage />,
  },
  {
    path: "/AddCandle",
    element: <AdminAddForm />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
