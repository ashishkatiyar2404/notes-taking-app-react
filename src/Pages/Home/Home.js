import React from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home__container">
      <div className="home__sidebar">
        <Sidebar />
      </div>
      <div className="home__home">
        <Link to="/richTextEditor">
          <button className="home__btn">Create New Note</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
