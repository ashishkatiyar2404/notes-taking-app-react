import { createContext, useContext, useState } from "react";
import axios from "axios";

const NoteContext = createContext();

const initialStateNote = {
  Title: "",
  Tags: "",
  Priority: "",
  BodyContent: "",
  Color: "white",
};

const NoteProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);
  const [editorText, setEditorText] = useState(initialStateNote);

  // ADD NOTE
  const addNote = async (note) => {
    console.log("add Note tk poch gye");
    const encodedToken = localStorage.getItem("token");
    try {
      const response = await axios.post(
        "/api/notes",
        { note },
        { headers: { authorization: encodedToken } }
      );
      console.log("API done");
      console.log(response);
      if (response.status === 201) {
        setNotes(response.data.notes);
        console.log(response.data.notes);
      }
    } catch (error) {
      console.log("ADD NOTE ERROR", error);
    }
  };

  //   const addNote = async (noteText) => {
  //     const token = localStorage.getItem("userToken");
  //     try {
  //       const response = await axios.post(
  //         "api/notes",
  //         {
  //           note: noteText,
  //         },
  //         { headers: { authorization: token } }
  //       );
  //       console.log(response);
  //       if (response.status === 201) {
  //         const {
  //           data: { notes },
  //         } = response;
  //         setNotes(notes);
  //       }
  //     } catch (error) {
  //       console.log("error", error);
  //     }
  //   };

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
    try {
      const response = await axios.post(
        `/api/notes/${noteID}`,
        { note: noteID },
        { header: { authorization: encodedToken } }
      );
      if (response.status === 201) {
        setNotes(response.data.notes);
      }
    } catch (error) {
      console.log("EDIT NOTE ERROR", error);
    }
  };

  return (
    <NoteContext.Provider
      value={{
        initialStateNote,
        addNote,
        setNotes,
        editorText,
        notes,
        editNote,
        deleteNote,
        setEditorText,
      }}
    >
      {children}
    </NoteContext.Provider>
  );
};

const useNote = () => useContext(NoteContext);
export { useNote, NoteProvider };
