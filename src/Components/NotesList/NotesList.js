import React from "react";
import { useNote } from "../../Context/NoteContext";
import AddNote from "./AddNote";
import "./NotesList.css";

const NotesList = () => {
  const { notes } = useNote();
  // console.log(notes);
  return (
    <div className="notes__list_container">
      <AddNote notes={notes} />
    </div>
  );
};

export default NotesList;
