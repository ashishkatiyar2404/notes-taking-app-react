import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../../Context/AuthContext";
import "./Login.css";
import { LoginHandler } from "./LoginHandler";
import { GuestLoginHandler } from "../SignUp/GuestLoginHandler";

const Login = () => {
  const { authDispatch } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state?.from.pathemail || "/";

  const [loginInfo, setLoginData] = useState({ email: "", password: "" });

  // INPUT HANDLER
  const inputChangeHandler = (e) => {
    console.log(e.target.value);
    setLoginData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // HANDLING GUEST DATA
  // const handlerGuest = () => {
  //   setLoginData((prev) => ({
  //     ...prev,
  //     email: "katiyar@gmail.com",
  //     password: "Katiyar@123",
  //   }));
  //   setLoginData((prev) => ({
  //     ...prev,
  //     email: "katiyar@gmail.com",
  //     password: "Katiyar@123",
  //   }));
  //   authDispatch({ type: "GUEST_LOGIN" });
  //   navigate("/Home");
  // };
  const guestLogin = {
    email: "katiyar@gmail.com",
    password: "Katiyar@123",
  };
  return (
    <div className="center">
      <h1>Login</h1>
      <form action="">
        <div className="text__field">
          <input
            type="text"
            name="email"
            required
            onChange={inputChangeHandler}
          />
          <span></span>
          <label>UserEmail</label>
        </div>
        <div className="text__field">
          <input
            type="password"
            name="password"
            required
            onChange={inputChangeHandler}
          />
          <span></span>
          <label>Password</label>
        </div>
        <div className="pass">Forgot Password?</div>
        <input
          type="submit"
          value="Login"
          onClick={(e) =>
            LoginHandler(authDispatch, from, navigate, loginInfo, e)
          }
        />
        <button
          className="guestLogin"
          onClick={(e) =>
            GuestLoginHandler(navigate, authDispatch, guestLogin, e)
          }
        >
          Guest Login
        </button>
      </form>
      <div className="signup__link">
        Not a member? <Link to="/SignUp">SignUp</Link>
      </div>
    </div>
  );
};

export default Login;
