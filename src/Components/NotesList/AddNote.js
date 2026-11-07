import React, { useState } from "react";
import { MdArchive, MdDeleteForever, MdEdit } from "react-icons/md";
import { useNote } from "../../Context/NoteContext";
import EditNotes from "../EditNotes/EditNotes";
import { normalizePastelColor } from "../../utils/colorUtils";
import "./AddNote.css";

const AddNote = ({ filterByDate }) => {
  const {
    deleteNote,
    archiveNote,
    onEditNoteContent,
  } = useNote();

  const [openModal, setOpenModal] = useState(false);

  const editNoteFunction = (perticularNotes) => {
    setOpenModal((open) => !open);
    onEditNoteContent(perticularNotes._id);
  };

  function deleteHandler(perticularNotes) {
    deleteNote(perticularNotes._id);
  }

  function archiveHandler(perticularNotes) {
    archiveNote(perticularNotes._id, perticularNotes);
  }

  if (!filterByDate || filterByDate.length === 0) {
    return (
      <div className="AddNotes__container">
        <div className="notes__empty-state">
          <div className="notes__empty-icon">📝</div>
          <p className="notes__empty-title">No notes added yet!</p>
          <p className="notes__empty-subtitle">
            Create your first note above to capture your ideas, tasks, or reminders.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="AddNotes__container">
      {filterByDate.map((perticularNotes) => (
        <div
          key={perticularNotes._id}
          className="note__container"
          style={{
            backgroundColor: normalizePastelColor(perticularNotes.Color),
          }}
        >
          {/* Card header */}
          <div className="note__header">
            <h3 className="note__title">{perticularNotes.Title}</h3>
            <div className="note__badges">
              {perticularNotes.Tags && perticularNotes.Tags !== "None" && (
                <span className="note__badge">{perticularNotes.Tags}</span>
              )}
              {perticularNotes.Priority && perticularNotes.Priority !== "None" && (
                <span className="note__badge">{perticularNotes.Priority}</span>
              )}
            </div>
          </div>

          {/* Inner content well */}
          <div className="note__content-well">{perticularNotes.BodyContent}</div>

          {/* Footer */}
          <div className="addNote__btn_container">
            <span className="note__timestamp">{perticularNotes.date}</span>
            <div className="note__actions">
              <button
                type="button"
                className="editNote__btn"
                title="Edit Note"
                onClick={() => editNoteFunction(perticularNotes)}
              >
                <MdEdit />
              </button>
              <button
                type="button"
                className="archive__btn"
                title="Archive Note"
                onClick={() => archiveHandler(perticularNotes)}
              >
                <MdArchive />
              </button>
              <button
                type="button"
                className="delete__btn"
                title="Delete Note"
                onClick={() => deleteHandler(perticularNotes)}
              >
                <MdDeleteForever />
              </button>
            </div>
          </div>
        </div>
      ))}
      {openModal && <EditNotes setOpenModal={setOpenModal} />}
    </div>
  );
};

export default AddNote;
