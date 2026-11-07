import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { MdArchive, MdOutlineRestoreFromTrash } from "react-icons/md";
import { useNote } from "../../Context/NoteContext";
import "./Sidebar.css";

const Sidebar = () => {
  const { notes, archiveNotes, trashNotes } = useNote();

  return (
    <div className="sidebar__container">
      <aside className="sidebar__aside">
        <p className="sidebar__section-label">Workspace</p>
        <ul className="sidebar__unordered">
          <li>
            <NavLink
              className={({ isActive }) =>
                "sidebar__link" + (isActive ? " active" : "")
              }
              to="/Home"
            >
              <span className="sidebar__link-left">
                <AiFillHome />
                Notes
              </span>
              <span className="sidebar__count-badge">
                {notes?.length ?? 0}
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                "sidebar__link" + (isActive ? " active" : "")
              }
              to="/Archive"
            >
              <span className="sidebar__link-left">
                <MdArchive />
                Archive
              </span>
              <span className="sidebar__count-badge">
                {archiveNotes?.length ?? 0}
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                "sidebar__link" + (isActive ? " active" : "")
              }
              to="/Trash"
            >
              <span className="sidebar__link-left">
                <MdOutlineRestoreFromTrash />
                Trash
              </span>
              <span className="sidebar__count-badge">
                {trashNotes?.length ?? 0}
              </span>
            </NavLink>
          </li>
          <Outlet />
        </ul>
      </aside>
    </div>
  );
};

export default Sidebar;
