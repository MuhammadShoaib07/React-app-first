import React, { Fragment, useContext, useEffect, useState } from "react";

import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
import { Link } from "react-router-dom";
import Logout from "../Auth/LogOut";
import AuthContext from "../../store/auth-context";
import { useHistory } from "react-router-dom";

const Header = (props) => {
  const authCtx = useContext(AuthContext);
  const userAuth = authCtx.userAuth;
  console.log(userAuth);

  const history = useHistory();

  return (
    <Fragment>
      <header className={classes.header}>
        <h1>React Meals</h1>

        {userAuth === true ? (
          <React.Fragment>
            <Link to="/" className={classes.home}>
              Home
            </Link>
            <HeaderCartButton />
          </React.Fragment>
        ) : null}

        <div className={classes.auth}>
          {userAuth === false ? (
            <React.Fragment>
              <Link to="/login" className={classes.button}>
                Login
              </Link>
              <Link to="/signup" className={classes.button}>
                SignUp
              </Link>
            </React.Fragment>
          ) : (
            <Logout />
          )}
        </div>
      </header>
    </Fragment>
  );
};

export default Header;
