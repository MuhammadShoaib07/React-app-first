import React from "react";
import { Route, Redirect } from "react-router-dom";

function ProtectedRoutes({ componet: Componet, ...rest }) {
  const isAuth = localStorage.getItem("auth");
  console.log("auth", isAuth);
  return (
    <Route
      {...rest}
      render={(props) => {
        isAuth === null ? <Redirect to="/login" /> : <Componet {...props} />;
      }}
    />
  );
}

export default ProtectedRoutes;
