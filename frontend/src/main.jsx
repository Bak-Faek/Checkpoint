import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import CandlePage from "./pages/CandlePage";
import AdminPage from "./pages/AdminPage";
import AdminAddForm from "./components/Admin/Add/AddForm";

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
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
