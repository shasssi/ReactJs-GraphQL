import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const RouteMiddleware = () => {
  const token = localStorage.getItem("token");
  if (!token) return <Navigate to="/" />;
  return <Outlet />;
};

export default RouteMiddleware;
