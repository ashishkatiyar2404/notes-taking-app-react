import React, { useState } from "react";
import { IoColorPalette } from "react-icons/io5";
import { useNote } from "../../Context/NoteContext";
import Sidebar from "../Sidebar/Sidebar";
import "./RichTextEditor.css";

const RichTextEditor = () => {
  const { initialStateNote, addNote, editorText, setEditorText } = useNote();
  const colors = ["#fe9b72", "#fec971", " #00d4fe", "#b693fd", "#e4ee91"];

  const [colorPalette, setColorPalette] = useState(false);
  const [BGcolor, setBGcolor] = useState("");

  // function reset() {
  //   setBGcolor(() => "");
  // }

  function HandlerSubmit() {
    console.log("Handler Submit");
    // console.log(e, editorText, initialStateNote);
    addNote(editorText);
    // setEditorText(initialStateNote);
    // setColorPalette(() => false);
  }

  return (
    <>
      <Sidebar />

      <div
        className="textEditor__outer_div"
        style={{ backgroundColor: BGcolor }}
      >
        <div className="textEditor__firstPart">
          <div className="textEditor__title">
            <label>
              Title <br />
              <input
                placeholder="Title"
                type="text"
                value={editorText.Title}
                onChange={(e) =>
                  setEditorText((previousValue) => ({
                    ...previousValue,
                    Title: e.target.value,
                  }))
                }
              />
            </label>
          </div>
          <div className="textEditor__tags">
            <label for="tags">
              Tags:-
              <select
                name="tags"
                placeholder="Add Tags"
                value={editorText.Tags}
                onChange={(e) =>
                  setEditorText((previousValue) => ({
                    ...previousValue,
                    Tags: e.target.value,
                  }))
                }
              >
                <option value="None">None</option>
                <option value="exercise">Exercise</option>
                <option value="chores">Chores</option>
                <option value="work">Work</option>
                <option value="health">Health</option>
              </select>
            </label>
          </div>
          <div className="textEditor__priority">
            <label for="priority">
              Priority:-
              <select
                name="priority"
                placeholder="Add Priority"
                value={editorText.Priority}
                onChange={(e) =>
                  setEditorText((previousValue) => ({
                    ...previousValue,
                    Priority: e.target.value,
                  }))
                }
              >
                <option value="None">None</option>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </label>
          </div>
        </div>
        <div className="textEditor__textarea">
          <textarea
            name="textArea"
            value={editorText.BodyContent}
            placeholder="Add Text For Your Title"
            onChange={(e) =>
              setEditorText((previousValue) => ({
                ...previousValue,
                BodyContent: e.target.value,
              }))
            }
          ></textarea>
        </div>
        <div className="textEditor__lastPart">
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
                  onClick={() => setBGcolor(() => item)}
                />
              ))}
            </ul>
          </span>
          <button onClick={HandlerSubmit}>Submit</button>
        </div>
      </div>
    </>
  );
};

export default RichTextEditor;
