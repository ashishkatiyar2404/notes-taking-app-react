import React from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { useAuth } from "../../Context/AuthContext";
import { useFilter } from "../../Context/FilterContext";
import { useNote } from "../../Context/NoteContext";
import "./Navbar.css";

const Navbar = () => {
  const { authState, authDispatch } = useAuth();
  const { filterInitialState, filterDispatch } = useFilter();
  const { clearUserData } = useNote();
  const location = useLocation();
  const navigate = useNavigate();

  const { IsLoggedIn } = authState;
  const initial = authState?.firstName
    ? authState.firstName.charAt(0).toUpperCase()
    : "U";
  const displayName = authState?.firstName || "User";

  const handleLogout = () => {
    clearUserData();
    authDispatch({ type: "LOGOUT" });
    navigate("/Login");
  };

  const handleSearchChange = (e) => {
    const val = e.target.value;
    filterDispatch({
      type: "SET_SEARCH_QUERY",
      payload: val,
    });
    // If user searches while on Archive or Trash, bring them to Home to see results
    if (val.trim() && location.pathname !== "/Home") {
      navigate("/Home");
    }
  };

  return (
    <div className="navbar__container">
      {/* Left: Logo */}
      <div className="navbar__heading">
        <div className="navbar__logo-badge">W</div>
        <h1>
          <NavLink className="siteHeading" to="/">
            WaveNote
          </NavLink>
        </h1>
      </div>

      {/* Center: Global Search Input (only when logged in) */}
      {IsLoggedIn && (
        <div className="navbar__search-wrap">
          <AiOutlineSearch className="navbar__search-icon" />
          <input
            type="text"
            className="navbar__search"
            placeholder="Search notes by title, tag, or content…"
            value={filterInitialState?.searchQuery || ""}
            onChange={handleSearchChange}
          />
        </div>
      )}

      {/* Right: User Profile & Actions */}
      <div className="navbar__credential">
        {IsLoggedIn ? (
          <>
            <div className="navbar__profile-pill">
              <div className="navbar__avatar">{initial}</div>
              <span className="navbar__user-name">Hi, {displayName}</span>
            </div>
            <button
              type="button"
              className="navbar_btn logout"
              onClick={handleLogout}
            >
              Logout
            </button>
          </>
        ) : (
          <button type="button" className="navbar_btn">
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
