import React, { useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../../Context/AuthContext";
import { useNote } from "../../../Context/NoteContext";
import "./Login.css";
import { LoginHandler } from "./LoginHandler";
import { GuestLoginHandler } from "../SignUp/GuestLoginHandler";

const Login = () => {
  const { authState, authDispatch } = useAuth();
  const { fetchAllData } = useNote();
  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state?.from?.pathname || "/Home";

  const [loginInfo, setLoginData] = useState({ email: "", password: "" });

  // If already logged in, prevent accessing login and redirect immediately
  if (authState.IsLoggedIn) {
    return <Navigate to={from} replace />;
  }

  const inputChangeHandler = (e) => {
    setLoginData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const guestLogin = {
    email: "katiyar@gmail.com",
    password: "Katiyar@123",
  };

  return (
    <div className="center">
      <h1>Login</h1>
      <form
        onSubmit={(e) =>
          LoginHandler(authDispatch, from, navigate, loginInfo, e, fetchAllData)
        }
      >
        <div className="text__field">
          <input
            type="email"
            name="email"
            required
            value={loginInfo.email}
            onChange={inputChangeHandler}
          />
          <span></span>
          <label>Email Address</label>
        </div>
        <div className="text__field">
          <input
            type="password"
            name="password"
            required
            value={loginInfo.password}
            onChange={inputChangeHandler}
          />
          <span></span>
          <label>Password</label>
        </div>
        <div className="pass">Forgot Password?</div>
        <input type="submit" value="Login" />
        <button
          type="button"
          className="guestLogin"
          onClick={(e) =>
            GuestLoginHandler(navigate, authDispatch, guestLogin, e, from, fetchAllData)
          }
        >
          Guest Login
        </button>
      </form>
      <div className="signup__link">
        Not a member? <Link to="/SignUp">Sign Up</Link>
      </div>
    </div>
  );
};

export default Login;
