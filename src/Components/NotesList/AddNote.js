import React from "react";
import { MdArchive, MdDeleteForever, MdEditNote } from "react-icons/md";
import { useNote } from "../../Context/NoteContext";
import "./AddNote.css";

const AddNote = ({ notes }) => {
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
    // console.log(perticularNotes._id, "INSIDE DELETE HANDLER");

    deleteNote(perticularNotes._id); // API call

    setTrashNotes([...trashNotes, perticularNotes]); // ADDING to TRASH

    // DELETING NOTE
    // setNotes(notes.filter((note) => note._id !== id));

    // function moveToTrash(id) {
    //   const tempNotes = [...notes];
    //   const index = tempNotes.findIndex((item) => item.id === id);
    //   if (index < 0) return;
    //   tempNotes.splice(index, 1);
    //   setNotes(tempNotes);
    // }
    // moveToTrash(id);

    // ARCHIVE HANDLER
  }

  function archiveHandler(perticularNotes) {
    console.log("archive handler");
    archiveNote(perticularNotes._id, perticularNotes);
    setArchiveNotes([...archiveNotes, perticularNotes]);
  }
  return (
    <div className="AddNotes__container">
      {notes.map((perticularNotes) => (
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
            <p>Date will come here</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AddNote;
