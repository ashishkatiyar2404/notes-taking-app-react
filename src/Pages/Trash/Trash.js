import React from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { useNote } from "../../Context/NoteContext";
import "./Trash.css";
import { MdRestoreFromTrash, MdDeleteForever } from "react-icons/md";
import Filters from "../../Components/Filters/Filters";

const Trash = () => {
  const { trashNotes, trashNoteRestore, trashNoteDelete } = useNote();

  return (
    <div className="trash__page">
      <div className="home__sidebar">
        <div>
          <Sidebar />
        </div>
        <div className="home__filter">
          <Filters />
        </div>
      </div>

      <div className="trashNotes__container">
        {trashNotes.map((item) => (
          <div
            className="trash__perticular_Note"
            style={{ backgroundColor: `${item.Color}` }}
          >
            <div className="trash__titleTags-container common__div">
              <p className="trash__bold">{item.Title}</p>
              <p className="trash__bold">{item.Tags}</p>
            </div>
            <div className="trash__contentPriority-container common__div">
              <p>{item.BodyContent}</p>
              <p className="trash__bold">{item.Priority}</p>
            </div>
            <div className="trash__restoreDelete-btn-container common__div">
              <p>DATE will come here</p>
              <MdRestoreFromTrash
                className="icons__trash"
                onClick={() => trashNoteRestore(item, item._id)}
              />
              <MdDeleteForever
                className="icons__trash"
                onClick={() => trashNoteDelete(item, item._id)}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trash;
