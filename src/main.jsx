import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Addtocart } from "./components/addtocart/index.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Login } from "./components/login/index.jsx";
import { Signup } from "./components/signup/index.jsx";
import Home from "./components/home/index.jsx";

export const Routring = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/addtocart",
    element: <Addtocart />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={Routring} />
  </React.StrictMode>
);
