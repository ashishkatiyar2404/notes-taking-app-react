import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const NoteContext = createContext();

const initialStateNote = {
  Title: "",
  Tags: "None",
  Priority: "None",
  BodyContent: "",
  Color: "#FFFFFF",
  date: "",
};

const NoteProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);
  const [trashNotes, setTrashNotes] = useState([]);
  const [archiveNotes, setArchiveNotes] = useState([]);

  const [editorText, setEditorText] = useState(initialStateNote);
  const [notesEdit, setNotesEdit] = useState(initialStateNote);

  // Fetch all user data (Notes, Archives, Trash)
  const fetchAllData = async () => {
    const encodedToken = localStorage.getItem("token");
    if (!encodedToken) return;

    try {
      const [notesRes, archiveRes, trashRes] = await Promise.all([
        axios.get("/api/notes", { headers: { authorization: encodedToken } }),
        axios.get("/api/archives", { headers: { authorization: encodedToken } }),
        axios.get("/api/trash", { headers: { authorization: encodedToken } }),
      ]);

      if (notesRes.status === 200) setNotes(notesRes.data.notes || []);
      if (archiveRes.status === 200) setArchiveNotes(archiveRes.data.archives || []);
      if (trashRes.status === 200) setTrashNotes(trashRes.data.trash || []);
    } catch (err) {
      console.error("Error fetching notes data:", err);
    }
  };

  // Initial load if token exists
  useEffect(() => {
    fetchAllData();
  }, []);

  const clearUserData = () => {
    setNotes([]);
    setArchiveNotes([]);
    setTrashNotes([]);
    setEditorText(initialStateNote);
    setNotesEdit(initialStateNote);
  };

  const onEditNoteContent = (_id) => {
    const object = notes.find((note) => note._id === _id);
    if (object) {
      setNotesEdit(object);
    }
  };

  // ADD NOTE
  const addNote = async (note) => {
    const encodedToken = localStorage.getItem("token");
    if (!encodedToken) return;

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
      console.error("ADD NOTE ERROR", error);
    }
  };

  // EDIT NOTE
  const editNote = async (editedNote) => {
    const encodedToken = localStorage.getItem("token");
    if (!encodedToken) return;

    try {
      const response = await axios.post(
        `/api/notes/${editedNote._id}`,
        { note: editedNote },
        { headers: { authorization: encodedToken } }
      );
      if (response.status === 201) {
        setNotes(response.data.notes);
        setNotesEdit(initialStateNote);
      }
    } catch (error) {
      console.error("EDIT NOTE ERROR", error);
    }
  };

  // MOVE TO TRASH
  const deleteNote = async (noteID) => {
    const encodedToken = localStorage.getItem("token");
    if (!encodedToken) return;

    try {
      const response = await axios.post(
        `/api/notes/trash/${noteID}`,
        {},
        { headers: { authorization: encodedToken } }
      );
      if (response.status === 201) {
        setNotes(response.data.notes);
        setTrashNotes(response.data.trash);
      }
    } catch (error) {
      console.error("TRASH NOTE ERROR", error);
    }
  };

  // MOVE TO ARCHIVE
  const archiveNote = async (noteID, noteArchive) => {
    const encodedToken = localStorage.getItem("token");
    if (!encodedToken) return;

    try {
      const response = await axios.post(
        `/api/notes/archives/${noteID}`,
        { noteArchive },
        { headers: { authorization: encodedToken } }
      );
      if (response.status === 201) {
        setNotes(response.data.notes);
        setArchiveNotes(response.data.archives);
      }
    } catch (error) {
      console.error("ARCHIVE ERROR", error);
    }
  };

  // RESTORE FROM ARCHIVE
  const archiveNoteRestore = async (noteId) => {
    const encodedToken = localStorage.getItem("token");
    if (!encodedToken) return;

    try {
      const response = await axios.post(
        `/api/archives/restore/${noteId}`,
        {},
        { headers: { authorization: encodedToken } }
      );
      if (response.status === 200) {
        setNotes(response.data.notes);
        setArchiveNotes(response.data.archives);
      }
    } catch (error) {
      console.error("ARCHIVE RESTORE ERROR", error);
    }
  };

  // RESTORE FROM TRASH
  const trashNoteRestore = async (note, noteId) => {
    const encodedToken = localStorage.getItem("token");
    if (!encodedToken) return;

    try {
      const response = await axios.post(
        `/api/trash/restore/${noteId}`,
        {},
        { headers: { authorization: encodedToken } }
      );
      if (response.status === 200) {
        setNotes(response.data.notes);
        setTrashNotes(response.data.trash);
      }
    } catch (error) {
      console.error("TRASH RESTORE ERROR", error);
    }
  };

  // PERMANENT DELETE FROM TRASH
  const trashNoteDelete = async (note, noteId) => {
    const encodedToken = localStorage.getItem("token");
    if (!encodedToken) return;

    try {
      const response = await axios.delete(`/api/trash/delete/${noteId}`, {
        headers: { authorization: encodedToken },
      });
      if (response.status === 200) {
        setTrashNotes(response.data.trash);
      }
    } catch (error) {
      console.error("TRASH DELETE ERROR", error);
    }
  };

  // PERMANENT DELETE FROM ARCHIVE
  const archiveNoteDelete = async (note, noteId) => {
    const encodedToken = localStorage.getItem("token");
    if (!encodedToken) return;

    try {
      const response = await axios.delete(`/api/archives/delete/${noteId}`, {
        headers: { authorization: encodedToken },
      });
      if (response.status === 200) {
        setArchiveNotes(response.data.archives);
      }
    } catch (error) {
      console.error("ARCHIVE DELETE ERROR", error);
    }
  };

  return (
    <NoteContext.Provider
      value={{
        initialStateNote,
        fetchAllData,
        clearUserData,

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
