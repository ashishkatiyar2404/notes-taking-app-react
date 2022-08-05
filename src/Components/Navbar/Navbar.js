import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";
import "./Navbar.css";

const Navbar = () => {
  const {
    authState: { IsLoggedIn },
    authDispatch,
  } = useAuth();
  return (
    <div className="navbar__container">
      <div className="navbar__heading">
        <h1>
          <NavLink className="siteHeading" to="/">
            WaveNote
          </NavLink>
        </h1>
      </div>
      <div className="navbar__credential">
        {IsLoggedIn ? (
          <button
            className="navbar_btn logout"
            onClick={() => authDispatch({ type: "LOGOUT" })}
          >
            LogOut
          </button>
        ) : (
          <button className="navbar_btn">
            <Link className="login" to="/Login">
              Login
            </Link>
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
