import React from "react";
import "./Auth.css";
import Logo from "../../img/logo.png";

const Auth = () => {
  return (
    <div className="auth">
      <div className="authLeft">
        <img src={Logo} alt="logo" />
        <div className="appName">
          <h1>Inbound Media</h1>
          <h6>Explore the marvel of social, gossip, & advertisement.</h6>
        </div>
      </div>

      <Login />
    </div>
  );
};

export default Auth;

export const Login = () => {
  return (
    <div className="authRight">
      <form className="infoForm authForm">
        <h3>Log In</h3>

        <div>
          <input
            type="text"
            placeholder="Enter Username"
            className="infoInput"
            name="username"
          />
        </div>

        <div>
          <input
            type="password"
            className="infoInput"
            placeholder="Enter password"
            name="password"
          />
        </div>

        <div>
          <span style={{ fontSize: "12px" }}>
            Don't have an account? Sign up
          </span>
          <button type="submit" className="button infoBtn">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export const SignUp = () => {
  return (
    <div className="authRight">
      <form className="infoForm authForm">
        <h3>Signup</h3>
        <div>
          <input
            type="text"
            className="infoInput"
            name="firstName"
            placeholder="Enter First Name"
          />
          <input
            type="text"
            className="infoInput"
            name="lastName"
            placeholder="Enter Last Name"
          />
        </div>

        <div>
          <input
            type="text"
            name="username"
            placeholder="Enter username"
            className="infoInput"
          />
        </div>

        <div>
          <input
            type="password"
            name="password"
            placeholder="Create Password"
            className="infoInput"
          />
          <input
            type="password"
            name="password"
            placeholder="Confirm Password"
            className="infoInput"
          />
        </div>

        <div>
          <h4 style={{ fontSize: "12px" }}>
            Already have an account? <span>Login here</span>
          </h4>
        </div>
        <button className="button infoBtn" type="submit">
          Signup
        </button>
      </form>
    </div>
  );
};
