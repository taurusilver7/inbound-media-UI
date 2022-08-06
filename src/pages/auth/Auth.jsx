import React from "react";
import "./Auth.css";
import Logo from "../../img/logo.png";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, signup } from "../../actions/auth";

const Auth = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    confirmPassword: "",
  });
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.authReducer);
  const [register, setRegister] = useState(false);
  const [confirmPass, setConfirmPass] = useState(true);

  // console.log(loading);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const resetForm = () => {
    setData({
      firstName: "",
      lastName: "",
      username: "",
      password: "",
      confirmPassword: "",
    });
    setConfirmPass(confirmPass);
  };

  const handleSubmit = (e) => {
    setConfirmPass(true);
    e.preventDefault();

    if (register) {
      data.password === data.confirmPassword
        ? dispatch(signup(data))
        : setConfirmPass(false);
    } else {
      dispatch(login(data));
    }

    // console.log(data);
  };
  return (
    <div className="auth">
      {/* left—logo, title */}
      <div className="authLeft">
        <img src={Logo} alt="logo" />

        <div className="appName">
          <h1>Inbound Media</h1>
          <h6>Explore the marvel of social, gossip, & advertisement.</h6>
        </div>
      </div>

      {/* right—login form */}
      <div className="authRight">
        <form onSubmit={handleSubmit} className="infoForm authForm">
          <h3>{register ? "Register" : "Login"}</h3>

          {register && (
            <div>
              <input
                required
                type="text"
                className="infoInput"
                name="firstName"
                value={data.firstName}
                placeholder="Your first name"
                onChange={handleChange}
              />
              <input
                required
                type="text"
                className="infoInput"
                name="lastName"
                value={data.lastName}
                placeholder="Your last name"
                onChange={handleChange}
              />
            </div>
          )}

          <div>
            <input
              required
              type="text"
              placeholder="Username"
              className="infoInput"
              name="username"
              value={data.username}
              onChange={handleChange}
            />
          </div>

          <div>
            <input
              required
              type="password"
              className="infoInput"
              placeholder="Password"
              name="password"
              value={data.password}
              onChange={handleChange}
            />
            {register && (
              <input
                required
                type="password"
                className="infoInput"
                name="confirmPassword"
                value={data.confirmPassword}
                placeholder="Confirm Password"
                onChange={handleChange}
              />
            )}
          </div>

          <span
            style={{
              fontSize: "12px",
              color: "red",
              alignSelf: "flex-end",
              marginRight: "5px",
              display: confirmPass ? "none" : "block",
            }}
          >
            Confirm password mismatched!
          </span>

          <div style={{ alignItems: "center" }}>
            <small
            // style={{
            //   fontSize: "12px",
            // }}
            >
              {register
                ? "Already have an account? "
                : "Don't have an account? "}
              <span
                style={{
                  fontSize: "12px",
                  cursor: "pointer",
                  textDecoration: "underline",
                }}
                onClick={() => {
                  resetForm();
                  setRegister((prev) => !prev);
                }}
              >
                {register ? "Login" : "Register here!"}
              </span>
            </small>
            <button className="button infoBtn" type="submit" disabled={loading}>
              {loading ? "Loading.." : register ? "Register" : "Login"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Auth;
