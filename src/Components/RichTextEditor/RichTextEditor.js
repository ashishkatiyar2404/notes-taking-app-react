import React, { useEffect, useState } from "react";
import { IoColorPalette } from "react-icons/io5";
import { useNote } from "../../Context/NoteContext";
import Filters from "../Filters/Filters";
import NotesList from "../NotesList/NotesList";
import Sidebar from "../Sidebar/Sidebar";
import "./RichTextEditor.css";

const RichTextEditor = () => {
  const { initialStateNote, addNote, editorText, setEditorText } = useNote();
  const colors = ["#fe9b72", "#fec971", " #00d4fe", "#b693fd", "#e4ee91"];

  const [colorPalette, setColorPalette] = useState(false);
  const [BGcolor, setBGcolor] = useState("");

  function HandlerSubmit() {
    addNote(editorText);
    setEditorText(initialStateNote);
    setColorPalette(false);
    setBGcolor("");
  }

  const current = new Date();
  const date = current.toLocaleString();
  useEffect(() => {
    setEditorText((prev) => ({ ...prev, date: date }));
    // eslint-disable-next-line
  }, [date]);

  return (
    <div className="big__container">
      <div className="home__sidebar">
        <div>
          <Sidebar />
        </div>
        <div className="home__filter">
          <Filters />
        </div>
      </div>
      <div className="NotesList_Plus_richText">
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
                  <option value="Exercise">Exercise</option>
                  <option value="Chores">Chores</option>
                  <option value="Work">Work</option>
                  <option value="Health">Health</option>
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
                  <option value="Low">Low</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
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
                    onClick={() => {
                      setBGcolor(item);
                      setEditorText((previousValue) => ({
                        ...previousValue,
                        Color: item,
                      }));
                    }}
                  />
                ))}
              </ul>
            </span>
            <button onClick={HandlerSubmit}>Submit</button>
          </div>
        </div>
        <div className="Notes__rich">
          <NotesList />
        </div>
      </div>
    </div>
  );
};

export default RichTextEditor;
