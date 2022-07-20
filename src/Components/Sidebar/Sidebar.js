import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import {
  // MdLabelOutline,
  MdArchive,
  MdOutlineRestoreFromTrash,
} from "react-icons/md";
import "./Sidebar.css";

const Sidebar = () => {
  const navLinkStyle = ({ isActive }) => {
    return {
      textDecoration: isActive ? "none" : "underline",
      color: isActive ? "orange" : "",
    };
  };
  return (
    <div className="sidebar__container">
      <aside className="sidebar__aside">
        <ul className="sidebar__unordered">
          <li>
            <NavLink style={navLinkStyle} to="/Home">
              <AiFillHome /> Home
            </NavLink>
          </li>
          {/* <li>
            <NavLink style={navLinkStyle} to="/Label">
              <MdLabelOutline /> Label
            </NavLink>
          </li> */}
          <li>
            <NavLink style={navLinkStyle} to="/Archive">
              <MdArchive /> Archive
            </NavLink>
          </li>
          <li>
            <NavLink style={navLinkStyle} to="/Trash">
              <MdOutlineRestoreFromTrash /> Trash
            </NavLink>
          </li>
          <Outlet />
        </ul>
      </aside>
    </div>
  );
};

export default Sidebar;
