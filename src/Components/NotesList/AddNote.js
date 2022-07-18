import React from "react";
import { MdArchive, MdDeleteForever, MdEditNote } from "react-icons/md";
import { useNote } from "../../Context/NoteContext";
import "./AddNote.css";

const AddNote = ({ notes }) => {
  const { deleteNote, setNotes, trashNotes, setTrashNotes } = useNote();

  function deleteHandler(perticularNotes, id) {
    // console.log(perticularNotes, id);
    deleteNote(perticularNotes.id);
    setTrashNotes([...trashNotes, perticularNotes]);
    // setNotes(notes.filter((note) => note.id !== id));
    function moveToTrash(id) {
      const tempNotes = [...notes];
      const index = tempNotes.findIndex((item) => item.id === id);
      if (index < 0) return;
      tempNotes.splice(index, 1);
      setNotes(tempNotes);
    }

    moveToTrash(id);
  }
  // console.log(notes);
  return (
    <div>
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
            {/* <p>date will come here</p> */}
            <p>{perticularNotes.Priority}</p>
          </div>
          <div className="addNote__btn_container">
            <MdDeleteForever
              className="delete__btn"
              onClick={() => deleteHandler(perticularNotes, perticularNotes.id)}
            />
            <MdArchive className="archive__btn" />
            <MdEditNote className="editNote__btn" />
            <p>Date will come here</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AddNote;
