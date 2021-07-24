import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../Firebase/Firebase";
import { useHistory } from "react-router";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const signIn = (e) => {
    e.preventDefault();
    //firebase stuff here
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };
  const signUp = (e) => {
    e.preventDefault();
    //firebase stuff here
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        //account successfully created with email and password
        console.log(auth);
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://logos-world.net/wp-content/uploads/2020/04/Amazon-Logo.png"
          alt="amazon-logo"
        />
      </Link>
      <div className="logo__container">
        <h1>Sign-In</h1>
        <form>
          <h5>Email</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="login__signInButton"
            type="submit"
            onClick={signIn}
          >
            Sign In
          </button>
          <p>
            By continuing, you agree to Amazon's Clone Conditions of Use and
            Privacy Notice.
          </p>
          <p className="newToAmazon">New to Amazon?</p>
          <button
            type="submit"
            className="loginRegister__Button"
            onClick={signUp}
          >
            Create Your Amazon Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
