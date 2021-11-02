import React, { useContext, useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Input from "../UI/Input";
import Card from "../UI/Card";
import clasess from "./Login.module.css";
import AuthContext from "../../store/auth-context";

const Login = () => {
  const authCtx = useContext(AuthContext);
  const history = useHistory();

  const emailRef = useRef();
  const passRef = useRef();

  useEffect(() => {
    const auth = localStorage.getItem("auth");
    console.log(auth);
    if (auth !== null) {
      history.push("/alreadyAuth");
    }
  }, []);

  const loginHnadler = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const pass = passRef.current.value;

    authCtx.logIn(email, pass);
    history.push("/");
  };

  return (
    <section className={clasess.login}>
      <Card>
        <form onSubmit={loginHnadler}>
          <h1> Login Page </h1>
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
          <button>Log in</button>
        </form>
      </Card>
    </section>
  );
};

export default Login;
