import { createContext, useContext, useState } from "react";
import axios from "axios";
import { v4 as uuid } from "uuid";

const NoteContext = createContext();

const initialStateNote = {
  id: uuid(),
  Title: "",
  Tags: "",
  Priority: "",
  BodyContent: "",
  Color: "",
};

const NoteProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);
  const [notesDelete, setNotesDelete] = useState([]);
  const [trashNotes, setTrashNotes] = useState([]);
  const [archiveNotes, setArchiveNotes] = useState([]);

  const [editorText, setEditorText] = useState(initialStateNote);

  // ADD NOTE
  const addNote = async (note) => {
    const encodedToken = localStorage.getItem("token");
    try {
      const response = await axios.post(
        "/api/notes",
        { note },
        { headers: { authorization: encodedToken } }
      );

      if (response.status === 201) {
        setNotes(response.data.notes);
      }
    } catch (error) {
      console.log("ADD NOTE ERROR", error);
    }
  };

  // EDIT NOTE
  const editNote = async (editNote) => {
    const encodedToken = localStorage.getItem("token");
    try {
      const response = await axios.post(
        `/api/notes/${editNote.Id}`,
        { editNote },
        { header: { authorization: encodedToken } }
      );
      if (response.status === 201) {
        setNotes(response.data.notes);
      }
    } catch (error) {
      console.log("EDIT NOTE ERROR", error);
    }
  };

  // DELETE NOTE
  const deleteNote = async (noteID) => {
    const encodedToken = localStorage.getItem("token");
    console.log("delete API done before try");

    try {
      const response = await axios.post(
        `/api/notes/${noteID}`,
        { note: noteID },
        { headers: { authorization: encodedToken } }
      );
      console.log(response.data.notes);

      if (response.status === 201) {
        // setNotes(response.data.notes);
        setTrashNotes(response.data.notes);
      }
    } catch (error) {
      console.log("delete NOTE ERROR", error);
    }
  };

  return (
    <NoteContext.Provider
      value={{
        initialStateNote,
        addNote,
        editNote,
        deleteNote,
        notes,
        setNotes,
        editorText,
        setEditorText,
        notesDelete,
        setNotesDelete,
        trashNotes,
        setTrashNotes,
        archiveNotes,
        setArchiveNotes,
      }}
    >
      {children}
    </NoteContext.Provider>
  );
};

const useNote = () => useContext(NoteContext);
export { useNote, NoteProvider };
