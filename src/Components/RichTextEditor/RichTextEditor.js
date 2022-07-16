import React, { useState } from "react";
import { IoColorPalette } from "react-icons/io5";
import Sidebar from "../Sidebar/Sidebar";
import "./RichTextEditor.css";

const RichTextEditor = () => {
  const colors = ["#fe9b72", "#fec971", " #00d4fe", "#b693fd", "#e4ee91"];
  const [colorPalette, setColorPalette] = useState(false);
  const [BGcolor, setBGcolor] = useState("");
  function reset() {
    setBGcolor(() => "");
    setColorPalette(() => false);
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
                onChange={(e) => console.log(e.target.value, "input")}
              />
            </label>
          </div>
          <div className="textEditor__tags">
            <label for="tags">
              Tags:-
              <select
                name="tags"
                placeholder="Add Tags"
                onChange={(e) => console.log(e.target.value, "tags")}
              >
                <option value="none" selected>
                  None
                </option>
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
                onChange={(e) => console.log(e.target.value, "priority")}
              >
                <option value="none" selected>
                  None
                </option>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </label>
          </div>
        </div>
        <div className="textEditor__textarea">
          <textarea
            onChange={(e) => console.log(e.target.value, "textarea")}
            name="textArea"
            placeholder="Add Text For Your Title"
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
          <button onClick={reset}>Submit</button>
        </div>
      </div>
    </>
  );
};

export default RichTextEditor;
