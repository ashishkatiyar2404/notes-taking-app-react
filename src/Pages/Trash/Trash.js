import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { useNote } from "../../Context/NoteContext";
import "./Trash.css";
import { MdRestoreFromTrash, MdDeleteForever } from "react-icons/md";
import Filters from "../../Components/Filters/Filters";
import { normalizePastelColor } from "../../utils/colorUtils";

const Trash = () => {
  const { trashNotes, trashNoteRestore, trashNoteDelete } = useNote();

  return (
    <div className="trash__page">
      <div className="home__sidebar">
        <Sidebar />
        <Filters />
      </div>

      <div className="trashNotes__container">
        {trashNotes && trashNotes.length > 0 ? (
          trashNotes.map((item) => (
            <div
              key={item._id}
              className="trash__perticular_Note"
              style={{ backgroundColor: normalizePastelColor(item.Color) }}
            >
              <div className="trash__titleTags-container">
                <p className="trash__bold">{item.Title}</p>
                {item.Tags && item.Tags !== "None" && (
                  <span className="trash__badge">{item.Tags}</span>
                )}
              </div>

              <div className="trash__contentPriority-container">
                <p>{item.BodyContent}</p>
              </div>

              <div className="trash__restoreDelete-btn-container">
                <p>{item.date}</p>
                <div className="trash__actions">
                  <button
                    type="button"
                    className="icons__trash restore"
                    title="Restore Note"
                    onClick={() => trashNoteRestore(item, item._id)}
                  >
                    <MdRestoreFromTrash />
                  </button>
                  <button
                    type="button"
                    className="icons__trash delete"
                    title="Delete Permanently"
                    onClick={() => trashNoteDelete(item, item._id)}
                  >
                    <MdDeleteForever />
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="trash__empty">
            <div className="empty__icon-badge">🗑️</div>
            <h3 className="empty__title">Trash is empty</h3>
            <p className="empty__subtitle">
              Items moved to trash will appear here before being permanently removed.
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

export default Trash;
