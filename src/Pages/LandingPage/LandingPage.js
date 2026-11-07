import React from "react";
import { Link } from "react-router-dom";
import hero from "../../Assets/heroImg.png";
import { useAuth } from "../../Context/AuthContext";
import "./LandingPage.css";

const LandingPage = () => {
  const { authState } = useAuth();
  const { IsLoggedIn } = authState;

  return (
    <div className="landing__container">
      <div className="landing__data_container">
        <div className="landing__heading_container">
          <div className="landing__badge">✨ Notion Warmth × Claymorphic Aesthetic</div>
          <h1>WaveNote</h1>
        </div>
        <div className="landing__small_heading">
          <h3>Meet Your Modern</h3>
          <h3>Note Taking Workspace</h3>
        </div>
        <div className="landing__details">
          <p>
            Manage your daily tasks, ideas, and workflow in a warm minimalist workspace
            with soft pastel claymorphic note cards. Capture ideas at the speed of thought.
          </p>
        </div>

        {/* Feature Pills */}
        <div className="landing__feature-pills">
          <span className="landing__pill">🎨 Pastel Themes</span>
          <span className="landing__pill">🏷️ Tag Filtering</span>
          <span className="landing__pill">⚡ Priority Sorter</span>
          <span className="landing__pill">🔒 Private &amp; Fast</span>
        </div>

        {/* CTA Buttons */}
        <div className="landing__btn_container">
          {IsLoggedIn ? (
            <>
              <div className="landing__btn_group">
                <Link className="landing__btn primary" to="/Home">
                  Go to My Notes →
                </Link>
              </div>
              <p>
                Welcome back, <strong>{authState.firstName || "User"}</strong>! Open your workspace.
              </p>
            </>
          ) : (
            <>
              <div className="landing__btn_group">
                <Link className="landing__btn primary" to="/SignUp">
                  Get Started Free
                </Link>
                <Link className="landing__btn secondary" to="/Login">
                  Sign In
                </Link>
              </div>
              <p>
                Ready to explore? Try the <Link to="/Login">Guest Login</Link> instantly.
              </p>
            </>
          )}
        </div>
      </div>

      <div className="landing__img_container">
        <div className="landing__preview_wrap">
          <img src={hero} alt="WaveNote Hero preview" className="landing__hero_img" />
          
          {/* Floating Pastel Preview Cards */}
          <div className="preview__card preview__card--1">
            <div className="preview__header">
              <span className="preview__title">💡 Project Idea</span>
              <span className="preview__tag">Work</span>
            </div>
            <p className="preview__body">Design Notion-style minimalist workspace...</p>
          </div>

          <div className="preview__card preview__card--2">
            <div className="preview__header">
              <span className="preview__title">🧘 Daily Routine</span>
              <span className="preview__tag">Health</span>
            </div>
            <p className="preview__body">Morning walk, meditation, and healthy breakfast.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
