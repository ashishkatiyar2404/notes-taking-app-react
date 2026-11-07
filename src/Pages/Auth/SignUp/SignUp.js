import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../../../Context/AuthContext";
import { useNote } from "../../../Context/NoteContext";
import axios from "axios";
import "../Login/Login.css";

const SignUp = () => {
  const navigate = useNavigate();
  const { authState, authDispatch } = useAuth();
  const { fetchAllData } = useNote();

  const [signUp, setSignUp] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
  });

  // If already logged in, redirect away
  if (authState.IsLoggedIn) {
    return <Navigate to="/Home" replace />;
  }

  const signUpHandler = (e) => {
    setSignUp((prevData) => ({ ...prevData, [e.target.name]: e.target.value }));
  };

  const signUpData = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/auth/signup", {
        ...signUp,
      });

      if (response.status === 201) {
        localStorage.setItem("token", response.data.encodedToken);
        authDispatch({ type: "SIGN_UP", payload: response.data });
        if (fetchAllData) {
          fetchAllData();
        }
        navigate("/Home", { replace: true });
      }
    } catch (error) {
      console.error("SignUp Error:", error);
      alert("Sign up failed. Please check your details and try again.");
    }
  };

  return (
    <div className="center">
      <h1>Sign Up</h1>
      <form onSubmit={signUpData}>
        <div className="text__field">
          <input
            type="email"
            name="email"
            value={signUp.email}
            onChange={signUpHandler}
            required
          />
          <span></span>
          <label>Email Address</label>
        </div>
        <div className="text__field first__name">
          <input
            type="text"
            name="name"
            value={signUp.name}
            onChange={signUpHandler}
            required
          />
          <span></span>
          <label>First Name</label>
        </div>
        <div className="text__field last__name">
          <input
            type="text"
            name="lastName"
            value={signUp.lastName}
            onChange={signUpHandler}
            required
          />
          <span></span>
          <label>Last Name</label>
        </div>

        <div className="text__field">
          <input
            type="password"
            name="password"
            value={signUp.password}
            onChange={signUpHandler}
            required
          />
          <span></span>
          <label>Password</label>
        </div>

        <input type="submit" value="Create Account" />
      </form>
      <div className="signup__link">
        Already a member? <Link to="/Login">Log In</Link>
      </div>
    </div>
  );
};

export default SignUp;
