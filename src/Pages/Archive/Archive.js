import React from "react";
import { Link } from "react-router-dom";
import { MdDeleteForever, MdRestoreFromTrash } from "react-icons/md";
import Filters from "../../Components/Filters/Filters";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { useNote } from "../../Context/NoteContext";
import { normalizePastelColor } from "../../utils/colorUtils";
import "./Archive.css";

const Archive = () => {
  const { archiveNotes, archiveNoteRestore, archiveNoteDelete } = useNote();

  return (
    <div className="archive__page">
      <div className="home__sidebar">
        <Sidebar />
        <Filters />
      </div>

      <div className="archiveNotes__container">
        {archiveNotes && archiveNotes.length > 0 ? (
          archiveNotes.map((archive) => (
            <div
              key={archive._id}
              className="archive__perticular_Note"
              style={{ backgroundColor: normalizePastelColor(archive.Color) }}
            >
              <div className="archive__titleTags-container">
                <p className="archive__bold">{archive.Title}</p>
                {archive.Tags && archive.Tags !== "None" && (
                  <span className="archive__badge">{archive.Tags}</span>
                )}
              </div>

              <div className="archive__contentPriority-container">
                <p>{archive.BodyContent}</p>
              </div>

              <div className="archive__restoreDelete-btn-container">
                <p>{archive.date}</p>
                <div className="archive__actions">
                  <button
                    type="button"
                    className="icons__archive restore"
                    title="Restore Note"
                    onClick={() => archiveNoteRestore(archive._id)}
                  >
                    <MdRestoreFromTrash />
                  </button>
                  <button
                    type="button"
                    className="icons__archive delete"
                    title="Delete Permanently"
                    onClick={() => archiveNoteDelete(archive, archive._id)}
                  >
                    <MdDeleteForever />
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="archive__empty">
            <div className="empty__icon-badge">📦</div>
            <h3 className="empty__title">No archived notes</h3>
            <p className="empty__subtitle">
              Notes you archive will appear here safely out of the way.
            </p>
            <Link to="/Home" className="empty__cta-btn">
              Back to Notes
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Archive;
