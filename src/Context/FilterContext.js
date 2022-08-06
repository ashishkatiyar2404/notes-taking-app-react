import React, { useContext } from "react";
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
        return {
          ...state,
          updatedNotesList: action.payload,
        };
      case "CLEAR_ALL":
        return {
          ...action.payload,
          updatedNotesList: initialFilterState,
        };
      case "SORT_BY_DATE":
        return {
          ...state,
          sortByDate: action.payload,
        };
      case "SORT_BY_PRIORITY":
        return {
          ...state,
          sortByPriority: action.payload,
        };
      case "SORT_BY_TAGS":
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
    <FilterProvider
      value={{ filterInitialState, filterDispatch, initialFilter }}
    >
      {children}
    </FilterProvider>
  );
};

const userFilter = () => useContext(FilterContext);
export { userFilter, FilterProvider };
