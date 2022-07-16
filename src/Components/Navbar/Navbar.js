import React from "react";
import { useAuth } from "../../Context/AuthContext";
import "./Navbar.css";

const Navbar = () => {
  const {
    authState: { IsLoggedIn },
  } = useAuth();
  return (
    <div className="navbar__container">
      <div className="navbar__heading">
        <h1>WaveNote</h1>
      </div>
      <div className="navbar__credential">
        {IsLoggedIn ? "LogOut" : "Login"}
      </div>
    </div>
  );
};

export default Navbar;
