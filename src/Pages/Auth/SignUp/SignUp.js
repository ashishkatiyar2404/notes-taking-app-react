import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../Context/AuthContext";
import axios from "axios";

const SignUp = () => {
  const navigate = useNavigate();
  const { authDispatch } = useAuth();

  const [signUp, setSignUp] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
  });

  const signUpHandler = (e) => {
    setSignUp((prevData) => ({ ...prevData, [e.target.name]: e.target.value }));
  };

  const signUpData = (e, signUp, navigate, AuthDispatch) => {
    e.preventDefault();

    (async () => {
      try {
        const response = await axios.post("/api/auth/signup", {
          ...signUp,
        });

        if (response.status === 201) {
          localStorage.setItem("token", response.data.encodedToken);
          AuthDispatch({ type: "SIGN_UP", payload: response.data });
          navigate("/Login");
        }
      } catch (error) {
        console.error("Kyu ASHISH nahi ho rha ky", error);
      }
    })();
  };

  return (
    <div className="center">
      <h1>Signup</h1>
      <form action="">
        <div className="text__field">
          <input type="email" name="email" onChange={signUpHandler} required />
          <span></span>
          <label>Email</label>
        </div>
        <div className="text__field first__name">
          <input type="text" name="name" onChange={signUpHandler} required />
          <span></span>
          <label>first name</label>
        </div>
        <div className="text__field last__name">
          <input
            type="text"
            name="lastName"
            onChange={signUpHandler}
            required
          />
          <span></span>
          <label>What about your last name</label>
        </div>

        <div className="text__field">
          <input
            type="password"
            name="password"
            onChange={signUpHandler}
            required
          />
          <span></span>
          <label> Confirm Password</label>
        </div>

        <input
          type="submit"
          value="Submit"
          onClick={(e) => signUpData(e, signUp, navigate, authDispatch)}
        />
        {/* <div className="already">
          <Link to="/Login">Already have account?</Link>
        </div>
        <span className="policy">
          By clicking the Sign Up button you agree to our
          <Link to="#"> Terms and conditions</Link>
          <Link to="#"> Policy Privacy</Link>
        </span> */}
      </form>
    </div>
  );
};

export default SignUp;
