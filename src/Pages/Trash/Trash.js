import React from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { useNote } from "../../Context/NoteContext";

const Trash = () => {
  const { trashNotes, notes } = useNote();
  console.log(trashNotes);
  console.log(notes);
  return (
    <div>
      <div className="home__sidebar">
        <Sidebar />
      </div>
      {trashNotes.map((item) => (
        <p>{item.Title}</p>
      ))}
    </div>
  );
};

export default Trash;
