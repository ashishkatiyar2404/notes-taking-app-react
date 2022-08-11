import { createContext, useContext, useState } from "react";
import axios from "axios";

const NoteContext = createContext();
const initialStateNote = {
  // id: uuid(),
  Title: "",
  Tags: "",
  Priority: "",
  BodyContent: "",
  Color: "",
  date: "",
};

const NoteProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);
  const [trashNotes, setTrashNotes] = useState([]);
  const [archiveNotes, setArchiveNotes] = useState([]);

  const [editorText, setEditorText] = useState(initialStateNote);

  // UPDATE THE NOTES
  const [notesEdit, setNotesEdit] = useState(initialStateNote);

  const onEditNoteContent = (_id) => {
    console.log("onEditNoteContent");
    const object = notes.find((note) => note._id === _id);
    console.log(object);
    setNotesEdit(object);
  };

  // ADD NOTE
  const addNote = async (note) => {
    const encodedToken = localStorage.getItem("token");
    try {
      const response = await axios.post(
        `/api/notes`,
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

  // EDIT NOTE OR UPDATE NOTE
  const editNote = async (editNote) => {
    const encodedToken = localStorage.getItem("token");
    console.log("balle balle");
    try {
      const response = await axios.post(
        `/api/notes/${editNote._id}`,
        { note: editNote },
        { headers: { authorization: encodedToken } }
      );
      console.log(response.data.notes);
      setNotes(response.data.notes);
      setNotesEdit(initialStateNote);
      // if (response.status === 201) {
      // }
    } catch (error) {
      console.log("EDIT NOTE ERROR", error);
    }
  };

  // DELETE NOTE
  const deleteNote = async (noteID) => {
    const encodedToken = localStorage.getItem("token");

    try {
      const response = await axios.delete(`/api/notes/${noteID}`, {
        headers: { authorization: encodedToken },
      });

      if (response.status === 200) {
        setNotes(response.data.notes);
      }
    } catch (error) {
      console.log("delete NOTE ERROR", error);
    }
  };

  // MOVE TO ARCHIVE
  const archiveNote = async (noteID, noteArchive) => {
    const encodedToken = localStorage.getItem("token");
    try {
      const response = await axios.post(
        `/api/notes/archives/${noteID}`,
        { noteArchive },
        { headers: { authorization: encodedToken } }
      );

      console.log(response.data.notes);
      console.log(response.data.archives);
      // SETTING
      setNotes(response.data.notes);
      setArchiveNotes(response.data.archives);
    } catch (ERROR) {
      console.log("ARCHIVE ERROR", ERROR);
    }
  };

  // ARCHIVE NOTES RESTORE
  const archiveNoteRestore = async (noteId) => {
    const encodedToken = localStorage.getItem("token");

    try {
      const response = await axios.post(
        `/api/archives/restore/${noteId}`,
        {},
        { headers: { authorization: encodedToken } }
      );

      // SETTING NOTES
      setNotes(response.data.notes);
      setArchiveNotes(response.data.archives);
    } catch (ERROR) {
      console.error("HUM HAI ARCHIVE RESTORE ERROR", ERROR);
    }
  };

  const trashNoteRestore = async (notes, noteId) => {
    const encodedToken = localStorage.getItem("token");

    try {
      const response = await axios.post(
        `/api/trash/restore/${noteId}`,
        { notes },
        { headers: { authorization: encodedToken } }
      );
      console.log(response.data.notes);
      console.log(response.data.trash);

      // SETTING NOTES
      setNotes(response.data.notes);
      setTrashNotes(response.data.trash);
    } catch (ERROR) {
      console.error("HUM HAI TRASH RESTORE ERROR", ERROR);
    }
  };

  const trashNoteDelete = async (notes, noteId) => {
    const encodedToken = localStorage.getItem("token");

    try {
      const response = await axios.delete(`/api/trash/delete/${noteId}`, {
        headers: { authorization: encodedToken },
      });

      // SETTING NOTES
      setTrashNotes(response.data.trash);
    } catch (ERROR) {
      console.error("HUM HAI TRASH RESTORE ERROR", ERROR);
    }
  };
  const archiveNoteDelete = async (notes, noteId) => {
    const encodedToken = localStorage.getItem("token");

    try {
      const response = await axios.delete(`/api/archives/delete/${noteId}`, {
        headers: { authorization: encodedToken },
      });
      console.log(response.data.archives);

      // SETTING NOTES
      setArchiveNotes(response.data.archives);
    } catch (ERROR) {
      console.error("HUM HAI TRASH RESTORE ERROR", ERROR);
    }
  };

  return (
    <NoteContext.Provider
      value={{
        initialStateNote,

        addNote,
        editNote,
        deleteNote,
        archiveNote,

        notes,
        setNotes,

        notesEdit,
        setNotesEdit,
        onEditNoteContent,

        editorText,
        setEditorText,

        // notesDelete,
        // setNotesDelete,
        trashNotes,
        setTrashNotes,

        archiveNotes,
        setArchiveNotes,

        archiveNoteRestore,
        trashNoteRestore,
        trashNoteDelete,
        archiveNoteDelete,
      }}
    >
      {children}
    </NoteContext.Provider>
  );
};

const useNote = () => useContext(NoteContext);
export { useNote, NoteProvider };
