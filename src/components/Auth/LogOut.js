import React, { useContext, Link } from "react";
import { useHistory } from "react-router";
import AuthContext from "../../store/auth-context";
import classes from "./LogOut.module.css";
const Logout = () => {
  const authCtx = useContext(AuthContext);
  const history = useHistory();

  const onClickHandler = () => {
    authCtx.logOut();
    console.log("logout");
    history.push("/login");
  };

  return (
    <button className={classes.button} onClick={onClickHandler}>
      Log Out
    </button>
  );
};

export default Logout;
