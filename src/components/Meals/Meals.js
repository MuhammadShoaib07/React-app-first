import { React, Fragment, useContext, useEffect, useState } from "react";
import AvailableMeals from "./AvailableMeals";
import MealsSummary from "./MealsSummary";
import Login from "../Auth/Login";
import SignUp from "../Auth/SignUp";
import Cart from "../Cart/Cart";
import Logout from "../Auth/LogOut";
import AuthContext from "../../store/auth-context";

import { Switch, Route, Redirect } from "react-router-dom";

const Meals = () => {
  // const [userAuth, setUserAuth] = useState(false);
  // useEffect(() => {
  //   const loggedInUser = localStorage.getItem("auth");
  //   if (loggedInUser) {
  //     const foundUser = JSON.parse(loggedInUser);
  //     setUserAuth(true);
  //   }
  // }, []);

  const authCtx = useContext(AuthContext);
  const userAuth = authCtx.userAuth;
  console.log(userAuth);

  return (
    <Fragment>
      <MealsSummary />

      <Switch>
        <Route
          path="/"
          exact
          render={() =>
            userAuth === true ? <AvailableMeals /> : <Redirect to="/login" />
          }
        />
        <Route
          path="/login"
          exact
          render={() => (userAuth === false ? <Login /> : <Redirect to="/" />)}
        />
        <Route
          path="/signUp"
          exact
          render={() => (userAuth === false ? <SignUp /> : <Redirect to="/" />)}
        />

        <Route path="/logout" component={Logout} />
        <Route path="/alreadyAuth" component={Logout} />
        <Route
          path="/cart"
          render={() =>
            userAuth === true ? <Cart /> : <Redirect to="/login" />
          }
        />
      </Switch>

      {/* <Switch>
        <Route path="/" exact render={() => <AvailableMeals />} />
        <Route path="/login" exact render={() => <Login />} />
        <Route path="/signUp" exact render={() => <SignUp />} />

        <Route path="/logout" component={Logout} />
        <Route path="/cart" render={() => <Cart />} />
      </Switch> */}
    </Fragment>
  );
};

export default Meals;
