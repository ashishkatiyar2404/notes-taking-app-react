import React from "react";
// import { useNote } from "../../Context/NoteContext";
import { FilterHook } from "../Filters/FilterHook";
import AddNote from "./AddNote";
import "./NotesList.css";

const NotesList = () => {
  // const { notes } = useNote();
  const filterByDate = FilterHook();
  // console.log(notes);
  return (
    <div className="notes__list_container">
      <AddNote filterByDate={filterByDate} />
    </div>
  );
};

export default NotesList;
