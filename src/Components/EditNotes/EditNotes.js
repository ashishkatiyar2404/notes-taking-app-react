import React, { useState } from "react";
import ReactDom from "react-dom";
import { IoColorPalette } from "react-icons/io5";
import { useNote } from "../../Context/NoteContext";
import { NOTE_COLORS, normalizePastelColor } from "../../utils/colorUtils";
import "./EditNotes.css";

const EditNotes = ({ setOpenModal }) => {
  const { notesEdit, setNotesEdit, editNote } = useNote();

  const [colorPalette, setColorPalette] = useState(false);
  const [BGcolor, setBGcolor] = useState("");

  const currentColor = normalizePastelColor(BGcolor || notesEdit?.Color);

  const saveEditNote = (newNotesEdit) => {
    setColorPalette(false);
    setBGcolor("");
    setOpenModal(false);
    editNote({
      ...newNotesEdit,
      Color: currentColor,
    });
  };

  const portalEl = document.getElementById("portal");
  if (!portalEl) return null;

  return ReactDom.createPortal(
    <div className="modal__bg" onClick={() => setOpenModal(false)}>
      <div
        className="modal__container"
        onClick={(e) => e.stopPropagation()}
        style={{ backgroundColor: currentColor }}
      >
        {/* Close button */}
        <div className="btn__exit_modal">
          <button
            type="button"
            className="btn__cross"
            title="Close"
            onClick={() => setOpenModal(false)}
          >
            ✕
          </button>
        </div>

        <div className="add__edit_note border">
          {/* Inputs */}
          <div className="input-container input-margin">
            <label htmlFor="input-title">
              <input
                id="input-title"
                className="border-note sm-pd title-input"
                placeholder="Title"
                type="text"
                value={notesEdit?.Title || ""}
                onChange={(e) =>
                  setNotesEdit((prev) => ({ ...prev, Title: e.target.value }))
                }
              />
            </label>

            <label htmlFor="input-tags">
              <select
                id="input-tags"
                name="tags"
                className="border-note sm-pd tags"
                value={notesEdit?.Tags || "None"}
                onChange={(e) =>
                  setNotesEdit((prev) => ({ ...prev, Tags: e.target.value }))
                }
              >
                <option value="None">Tag</option>
                <option value="Work">Work</option>
                <option value="Health">Health</option>
                <option value="Exercise">Exercise</option>
                <option value="Chores">Chores</option>
              </select>
            </label>

            <label htmlFor="input-priority">
              <select
                id="input-priority"
                name="priority"
                className="border-note sm-pd priority"
                value={notesEdit?.Priority || "None"}
                onChange={(e) =>
                  setNotesEdit((prev) => ({
                    ...prev,
                    Priority: e.target.value,
                  }))
                }
              >
                <option value="None">Priority</option>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
            </label>
          </div>

          {/* Body */}
          <textarea
            placeholder="Add Note…"
            value={notesEdit?.BodyContent || ""}
            onChange={(e) =>
              setNotesEdit((prev) => ({
                ...prev,
                BodyContent: e.target.value,
              }))
            }
          />

          {/* Color picker */}
          <div className="btn__colorPalette">
            <div className="palette_wrapper">
              <button
                type="button"
                className="palette_btn"
                title="Change Note Color"
                onClick={() => setColorPalette(!colorPalette)}
              >
                <IoColorPalette />
              </button>

              <ul
                className={`colorPalette_list ${
                  colorPalette ? "colorPalette_list_active" : ""
                }`}
              >
                {NOTE_COLORS.map((item, index) => (
                  <li
                    key={index}
                    className={`colorPalette_list_item ${
                      currentColor === item.value ? "selected" : ""
                    }`}
                    style={{ backgroundColor: item.value }}
                    title={item.name}
                    onClick={() => {
                      setBGcolor(item.value);
                      setNotesEdit((prev) => ({
                        ...prev,
                        Color: item.value,
                      }));
                      setColorPalette(false);
                    }}
                  />
                ))}
              </ul>
            </div>
          </div>

          <button
            type="button"
            className="btn__update"
            onClick={() => saveEditNote(notesEdit)}
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>,
    portalEl
  );
};

export default EditNotes;
