import React, { useContext, useRef, useEffect } from "react";
import Input from "../UI/Input";
import Card from "../UI/Card";
import classes from "./SignUp.module.css";
import AuthContext from "../../store/auth-context";
import { useHistory } from "react-router-dom";

const SignUp = () => {
  let history = useHistory();
  const authCtx = useContext(AuthContext);

  const emailRef = useRef();
  const passRef = useRef();

  useEffect(() => {
    const auth = localStorage.getItem("auth");
    console.log(auth);
    if (auth !== null) {
      history.push("/alreadyAuth");
    }
  }, []);

  const sinUpHandler = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const pass = passRef.current.value;
    authCtx.signUp(email, pass);
    history.push("/login");
  };

  return (
    <section className={classes.signup}>
      <Card>
        <form onSubmit={sinUpHandler}>
          <h1>SignUp Page</h1>
          <Input label="UserName:" input={{ id: "username", type: "text" }} />
          <Input
            ref={emailRef}
            label="Email:"
            input={{ id: "email", type: "text" }}
          />
          <Input
            ref={passRef}
            label="Password:"
            input={{ id: "password", type: "password" }}
          />
          <button>Sign Up</button>
        </form>
      </Card>
    </section>
  );
};

export default SignUp;
