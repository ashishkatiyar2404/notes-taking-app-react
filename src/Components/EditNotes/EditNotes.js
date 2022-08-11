import React, { useState } from "react";
import ReactDom from "react-dom";
import { IoColorPalette } from "react-icons/io5";

import { useNote } from "../../Context/NoteContext";
import "./EditNotes.css";

const EditNotes = ({ setOpenModal }) => {
  const { notesEdit, setNotesEdit, editNote } = useNote();

  const colors = ["#fe9b72", "#fec971", " #00d4fe", "#b693fd", "#e4ee91"];

  const [colorPalette, setColorPalette] = useState(false);
  const [BGcolor, setBGcolor] = useState("");
  const saveEditNote = (newNotesEdit) => {
    setColorPalette(false);
    setBGcolor("");
    setOpenModal(false);
    editNote(newNotesEdit);
  };
  return ReactDom.createPortal(
    <div className="modal__bg">
      <div className="modal__container">
        <div className="btn__exit_modal">
          <button className="btn__cross" onClick={() => setOpenModal(false)}>
            X
          </button>
        </div>
        <div
          style={{ backgroundColor: BGcolor }}
          className="add__edit_note border"
        >
          <div className="input-container input-margin">
            <label htmlFor="input-title">
              Title:
              <input
                id="input-title"
                className="border-note sm-pd title-input "
                placeholder="Title"
                type="text"
                value={notesEdit.Title}
                onChange={(e) =>
                  setNotesEdit((prev) => ({ ...prev, Title: e.target.value }))
                }
              />
            </label>
            <label htmlFor="input-tags">
              Tags:
              <select
                id="input-tags"
                name="tags"
                className="border-note sm-pd tags"
                placeholder="Add Tags"
                value={notesEdit.Tags}
                onChange={(e) =>
                  setNotesEdit((prev) => ({ ...prev, Tags: e.target.value }))
                }
              >
                <option value="None">None</option>
                <option value="Work">Work</option>
                <option value="Health">Health</option>
                <option value="Exercise">Exercise</option>
                <option value="Chores">Chores</option>
              </select>
            </label>
            <label htmlFor="input-priority">
              Priority:
              <select
                id="input-priority"
                name="priority"
                className="border-note sm-pd priority"
                placeholder="Add Priority"
                value={notesEdit.Priority}
                onChange={(e) =>
                  setNotesEdit((prev) => ({
                    ...prev,
                    Priority: e.target.value,
                  }))
                }
              >
                <option value="None">None</option>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
            </label>
          </div>
          <textarea
            placeholder="Add Note..."
            type="text"
            value={notesEdit.BodyContent}
            onChange={(e) => {
              setNotesEdit((prev) => ({
                ...prev,
                BodyContent: e.target.value,
              }));
            }}
          />
          <div className="btn__colorPalette">
            <span>
              <IoColorPalette onClick={() => setColorPalette(!colorPalette)} />
              <ul
                className={`colorPalette_list ${
                  colorPalette ? "colorPalette_list_active" : ""
                }`}
              >
                {colors.map((item, index) => (
                  <li
                    key={index}
                    className="colorPalette_list_item"
                    style={{ backgroundColor: item }}
                    onClick={() => {
                      setBGcolor(item);
                      setNotesEdit((previousValue) => ({
                        ...previousValue,
                        Color: item,
                      }));
                    }}
                  />
                ))}
              </ul>
            </span>
          </div>
          <button
            className="btn__update"
            onClick={() => saveEditNote(notesEdit)}
          >
            Update
          </button>
        </div>
      </div>
    </div>,
    document.getElementById("portal")
  );
};

export default EditNotes;
