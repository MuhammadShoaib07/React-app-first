import { React, useReducer } from "react";
import { act } from "react-dom/test-utils";
import AuthContext from "./auth-context";

const defaultAuthState = {
  auth: [],
  userAuth: false,
};

const authReducer = (state, action) => {
  if (action.type === "SIGNUP") {
    let email = action.auth.email;
    let pass = action.auth.password;
    let oldstat = { ...state };

    let updatedState = oldstat.auth.concat({ email: email, password: pass });
    alert("You are Sign Up successfully ");
    return {
      ...oldstat,
      auth: updatedState,
    };
  }

  if (action.type === "LOGIN") {
    let email = action.auth.email;
    let pass = action.auth.password;
    let isExist = false;
    state.auth.forEach((element, index) => {
      element.email === email && element.password === pass
        ? (isExist = true)
        : (isExist = false);
    });

    if (isExist) {
      localStorage.setItem(
        "auth",
        JSON.stringify({ email: email, password: pass })
      );
      return {
        ...state,
        userAuth: true,
      };
    } else {
      alert("please Enter the correct credientials");
    }
  }

  if (action.type === "LOGOUT") {
    localStorage.removeItem("auth");
    return {
      auth: [],
      userAuth: false,
    };
  }

  return defaultAuthState;
};

const AuthProvider = (props) => {
  const [authState, dispatchauthAction] = useReducer(
    authReducer,
    defaultAuthState
  );

  const signupAuthHandler = (email, pass) => {
    dispatchauthAction({
      type: "SIGNUP",
      auth: { email: email, password: pass },
    });
  };

  const loginAuthHandler = (email, pass) => {
    dispatchauthAction({
      type: "LOGIN",
      auth: { email: email, password: pass },
    });
  };

  const logOutHandler = () => {
    dispatchauthAction({
      type: "LOGOUT",
    });
  };

  const authContext = {
    auth: authState.auth,
    userAuth: authState.userAuth,
    signUp: signupAuthHandler,
    logIn: loginAuthHandler,
    logOut: logOutHandler,
  };

  return (
    <AuthContext.Provider value={authContext}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
