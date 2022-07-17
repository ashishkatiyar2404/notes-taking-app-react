import React from "react";
import { MdArchive, MdDeleteForever, MdEditNote } from "react-icons/md";

const AddNote = ({ notes }) => {
  console.log(notes);
  return (
    <div className="note__container">
      <div>
        <h3>{notes.Title}</h3>
        <h4>{notes.Tags}</h4>
      </div>
      <div>
        <textarea rows="8" cols="10">
          {notes.BodyContent}
        </textarea>
      </div>
      <div>
        {/* <p>date will come here</p> */}
        <p>{notes.Priority}</p>
      </div>
      <div>
        <MdDeleteForever />
        <MdArchive />
        <MdEditNote />
        <p>Date will come here</p>
      </div>
    </div>
  );
};

export default AddNote;
