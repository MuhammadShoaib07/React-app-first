import React from "react";

const AuthContext = React.createContext({
  auth: [],
  userAuth: false,
  signUp: (email, pass) => {},
  logIn: (email, pass) => {},
  logOut: () => {},
});

export default AuthContext;
