import React, { useState } from "react";
import { IoColorPalette } from "react-icons/io5";
import { useNote } from "../../Context/NoteContext";
import Filters from "../Filters/Filters";
import NotesList from "../NotesList/NotesList";
import Sidebar from "../Sidebar/Sidebar";
import { NOTE_COLORS, normalizePastelColor } from "../../utils/colorUtils";
import "./RichTextEditor.css";

const RichTextEditor = () => {
  const { initialStateNote, addNote, editorText, setEditorText } = useNote();

  const [colorPalette, setColorPalette] = useState(false);
  const [BGcolor, setBGcolor] = useState("");

  function HandlerSubmit() {
    if (!editorText.Title?.trim() && !editorText.BodyContent?.trim()) {
      alert("Please add a title or some note content before saving!");
      return;
    }
    const noteDate = new Date().toLocaleString();
    addNote({
      ...editorText,
      date: noteDate,
      Color: normalizePastelColor(BGcolor),
    });
    setEditorText(initialStateNote);
    setColorPalette(false);
    setBGcolor("");
  }

  return (
    <div className="big__container">
      {/* Left sidebar */}
      <div className="home__sidebar">
        <Sidebar />
        <Filters />
      </div>

      {/* Main content */}
      <div className="NotesList_Plus_richText">
        {/* Editor card */}
        <div
          className="textEditor__outer_div"
          style={{ backgroundColor: normalizePastelColor(BGcolor) }}
        >
          {/* Top row */}
          <div className="textEditor__firstPart">
            <div className="textEditor__title">
              <label>
                <input
                  placeholder="Title…"
                  type="text"
                  value={editorText.Title}
                  onChange={(e) =>
                    setEditorText((prev) => ({
                      ...prev,
                      Title: e.target.value,
                    }))
                  }
                />
              </label>
            </div>

            <div className="textEditor__tags">
              <label htmlFor="tags">
                <select
                  name="tags"
                  id="tags"
                  value={editorText.Tags}
                  onChange={(e) =>
                    setEditorText((prev) => ({
                      ...prev,
                      Tags: e.target.value,
                    }))
                  }
                >
                  <option value="None">Tag</option>
                  <option value="Exercise">Exercise</option>
                  <option value="Chores">Chores</option>
                  <option value="Work">Work</option>
                  <option value="Health">Health</option>
                </select>
              </label>
            </div>

            <div className="textEditor__priority">
              <label htmlFor="priority">
                <select
                  name="priority"
                  id="priority"
                  value={editorText.Priority}
                  onChange={(e) =>
                    setEditorText((prev) => ({
                      ...prev,
                      Priority: e.target.value,
                    }))
                  }
                >
                  <option value="None">Priority</option>
                  <option value="Low">Low</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
                </select>
              </label>
            </div>
          </div>

          {/* Recessed textarea */}
          <div className="textEditor__textarea">
            <textarea
              name="textArea"
              value={editorText.BodyContent}
              placeholder="Take a note…"
              onChange={(e) =>
                setEditorText((prev) => ({
                  ...prev,
                  BodyContent: e.target.value,
                }))
              }
            />
          </div>

          {/* Bottom toolbar */}
          <div className="textEditor__lastPart">
            <div className="palette_wrapper">
              <button
                type="button"
                className="palette_btn"
                title="Change Color"
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
                      BGcolor === item.value ? "selected" : ""
                    }`}
                    style={{ backgroundColor: item.value }}
                    title={item.name}
                    onClick={() => {
                      setBGcolor(item.value);
                      setEditorText((prev) => ({
                        ...prev,
                        Color: item.value,
                      }));
                      setColorPalette(false);
                    }}
                  />
                ))}
              </ul>
            </div>

            <button type="button" onClick={HandlerSubmit}>
              Add Note
            </button>
          </div>
        </div>

        {/* Notes grid */}
        <div className="Notes__rich">
          <NotesList />
        </div>
      </div>
    </div>
  );
};

export default RichTextEditor;
