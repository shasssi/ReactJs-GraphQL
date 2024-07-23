import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginComponent from "./components/Login";
import UserComponent from "./components/User";
import RouteMiddleware from "./components/RouteMiddleware";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RouteMiddleware />}>
          <Route path="/users" element={<UserComponent />} />
        </Route>
        <Route path="/" element={<LoginComponent />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
