import React from "react";
import { Login, Dashboard } from "../pages";
import Home from "../components/Admin/Home/Main";
import Managers from "../components/Admin/Managers/Main";
import Promocodes from "../components/Admin/Promocodes/Main";

export const ROUTES = [
  {
    path: "/",
    key: "APP_LOGIN",
    exact: true,
    component: () => <Login />,
  },
  {
    path: "/dashboard",
    key: "APP_DASHBOARD",
    exact: false,
    component: () => <Dashboard />,
  },
];

export const ADMIN_ROUTES = [
  {
    path: "/dashboard",
    key: "APP_DASHBOARD",
    exact: true,
    component: () => <Home />,
  }
];
