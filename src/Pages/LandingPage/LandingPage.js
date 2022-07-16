import React from "react";
import { Link } from "react-router-dom";
import hero from "../../Assets/heroImg.png";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landing__container">
      <div className="landing__data_container">
        <div className="landing__heading_container">
          <h1>WaveNote</h1>
        </div>
        <div className="landing__small_heading">
          <h3>Meet Your Modern</h3>
          <h3>Note Taking App</h3>
        </div>
        <div className="landing__details">
          <p>
            Manage your daily task and workflow in a modern way and boost your
            effiency without any efforts.
          </p>
        </div>
        <div className="landing__btn_container">
          <button>
            <Link className="landing__button" to="/Home">
              Join Now
            </Link>
          </button>
          <p>Already have an account?</p>
        </div>
      </div>
      <div className="landing__img_container">
        <img src={hero} alt="hero img" />
      </div>
    </div>
  );
};

export default LandingPage;
