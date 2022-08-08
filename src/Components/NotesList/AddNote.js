import React from "react";
import { MdArchive, MdDeleteForever, MdEditNote } from "react-icons/md";
import { useNote } from "../../Context/NoteContext";
import "./AddNote.css";

const AddNote = ({ filterByDate }) => {
  console.log(filterByDate);
  const {
    deleteNote,
    archiveNote,
    archiveNotes,
    trashNotes,
    setTrashNotes,
    setArchiveNotes,
  } = useNote();

  // DELETE HANDLER
  function deleteHandler(perticularNotes) {
    deleteNote(perticularNotes._id); // API call

    setTrashNotes([...trashNotes, perticularNotes]); // ADDING to TRASH
  }

  function archiveHandler(perticularNotes) {
    console.log("archive handler");
    archiveNote(perticularNotes._id, perticularNotes);
    setArchiveNotes([...archiveNotes, perticularNotes]);
  }
  return (
    <div className="AddNotes__container">
      {filterByDate.map((perticularNotes) => (
        <div
          className="note__container"
          style={{ backgroundColor: perticularNotes.Color }}
        >
          <div>
            <h3>{perticularNotes.Title}</h3>
            <p>{perticularNotes.id}</p>
            <h4>{perticularNotes.Tags}</h4>
          </div>
          <div>
            <textarea rows="8" cols="10">
              {perticularNotes.BodyContent}
            </textarea>
          </div>
          <div>
            <p>{perticularNotes.Priority}</p>
          </div>
          <div className="addNote__btn_container">
            <MdDeleteForever
              className="delete__btn"
              onClick={() => deleteHandler(perticularNotes, perticularNotes.id)}
            />
            <MdArchive
              className="archive__btn"
              onClick={() =>
                archiveHandler(perticularNotes, perticularNotes.id)
              }
            />
            <MdEditNote className="editNote__btn" onClick={() => {}} />
            <p>{perticularNotes.date}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AddNote;
