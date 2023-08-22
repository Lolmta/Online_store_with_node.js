import React from "react";

import { Routes, Route } from "react-router-dom";
import { authRoutes, publicRoutes } from "./routes";

const AppRouter = () => {
  const isAuth = false;
  const routes = isAuth ? authRoutes : publicRoutes;

  return (
    <Routes>
      {routes.map((route) => (
        <Route
          exact
          path={route.path}
          element={<route.Component />}
          key={route.path}
        />
      ))}
    </Routes>
  );
};

export default AppRouter;
