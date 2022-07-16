import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar__container">
      <div className="navbar__heading">
        <h1>WaveNote</h1>
      </div>
      <div className="navbar__credential">Login/Logout</div>
    </div>
  );
};

export default Navbar;
