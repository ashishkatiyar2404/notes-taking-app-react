import React, { createContext, useContext, useEffect, useReducer } from "react";
import { useNote } from "./NoteContext";

const FilterContext = createContext();

const FilterProvider = ({ children }) => {
  const { notes } = useNote();

  const initialFilter = {
    sortByDate: "none",
    sortByTags: [],
    sortByPriority: "none",
    updatedNotesList: notes,
  };

  useEffect(() => {
    filterDispatch({ type: "INITIALIZER", payload: notes });
  }, [notes]);

  // REDUCER WITH FUNC
  const [filterInitialState, filterDispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "INITIALIZER":
        console.log("INITIALIZER CLICKED");
        return {
          ...state,
          updatedNotesList: action.payload,
        };

      case "CLEAR_ALL":
        console.log("CLEAR ALL CLICKED");
        return {
          ...action.payload,
          updatedNotesList: initialFilter,
        };

      case "SORT_BY_DATE":
        console.log("SORT_BY_DATE  CLICKED");
        return {
          ...state,
          sortByDate: action.payload,
        };

      case "SORT_BY_PRIORITY":
        console.log("SORT_BY_PRIORITY CLICKED");
        return {
          ...state,
          sortByPriority: action.payload,
        };

      case "SORT_BY_TAGS":
        console.log("SORT_BY_TAGS  CLICKED");
        return {
          ...state,
          sortByTags: state.sortByTags.includes(action.payload)
            ? state.sortByTags.filter((i) => i !== action.payload)
            : [...state.sortByTags, action.payload],
        };
      default:
        return state;
    }
  }, initialFilter);
  return (
    <FilterContext.Provider
      value={{ filterInitialState, filterDispatch, initialFilter }}
    >
      {children}
    </FilterContext.Provider>
  );
};

const useFilter = () => useContext(FilterContext);
export { useFilter, FilterProvider };
