import React from "react";
import { MdDeleteForever, MdRestoreFromTrash } from "react-icons/md";
import Filters from "../../Components/Filters/Filters";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { useNote } from "../../Context/NoteContext";
import "./Archive.css";

const Archive = () => {
  const { archiveNotes, archiveNoteRestore, archiveNoteDelete } = useNote();
  return (
    <div className="archive__page">
      <div className="home__sidebar">
        <div>
          <Sidebar />
        </div>
        <div className="home__filter">
          <Filters />
        </div>
      </div>

      <div className="archiveNotes__container">
        {archiveNotes.map((archive) => (
          <div
            className="archive__perticular_Note"
            style={{ backgroundColor: `${archive.Color}` }}
          >
            <div className="archive__titleTags-container common__div">
              <p className="archive__bold">{archive.Title}</p>
              <p className="archive__bold">{archive.Tags}</p>
            </div>
            <div className="archive__contentPriority-container common__div">
              <p>{archive.BodyContent}</p>
              <p className="archive__bold">{archive.Priority}</p>
            </div>
            <div className="archive__restoreDelete-btn-container common__div">
              <p>{archive.date}</p>
              <MdRestoreFromTrash
                className="icons__archive"
                onClick={() => archiveNoteRestore(archive._id)}
              />
              <MdDeleteForever
                className="icons__archive"
                onClick={() => archiveNoteDelete(archive, archive._id)}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Archive;
