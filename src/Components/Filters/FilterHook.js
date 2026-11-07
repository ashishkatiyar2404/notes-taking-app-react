import { useFilter } from "../../Context/FilterContext";
import { useNote } from "../../Context/NoteContext";

const FilterHook = () => {
  const { filterInitialState } = useFilter();
  const { notes } = useNote();
  const newFilterNotes = notes ? [...notes] : [];

  const {
    sortByDate,
    sortByTags = [],
    sortByPriority,
    searchQuery = "",
  } = filterInitialState;

  const getFilteredBySearch = (notesArr, query) => {
    if (!query || query.trim() === "") return notesArr;
    const lowerQ = query.toLowerCase().trim();
    return notesArr.filter(
      (note) =>
        note.Title?.toLowerCase().includes(lowerQ) ||
        note.BodyContent?.toLowerCase().includes(lowerQ) ||
        note.Tags?.toLowerCase().includes(lowerQ)
    );
  };

  const getFilterByTags = (notesArr, tags) => {
    if (tags && tags.length > 0) {
      return notesArr.filter((note) =>
        note.Tags ? tags.includes(note.Tags.toLowerCase()) : false
      );
    }
    return notesArr;
  };

  const getFilterByPriority = (notesArr, selectedPriority) => {
    return selectedPriority && selectedPriority !== "none"
      ? notesArr.filter(
          (note) =>
            note.Priority?.toLowerCase() === selectedPriority.toLowerCase()
        )
      : notesArr;
  };

  const getFilterByDate = (notesArr, date) => {
    if (date === "oldToNew") {
      return [...notesArr].sort((a, b) => {
        const firstDate = new Date(a.date).getTime() || 0;
        const lastDate = new Date(b.date).getTime() || 0;
        return firstDate - lastDate;
      });
    } else if (date === "newToOld") {
      return [...notesArr].sort((a, b) => {
        const firstDate = new Date(a.date).getTime() || 0;
        const lastDate = new Date(b.date).getTime() || 0;
        return lastDate - firstDate;
      });
    }
    return notesArr;
  };

  const searchedNotes = getFilteredBySearch(newFilterNotes, searchQuery);
  const filterByTags = getFilterByTags(searchedNotes, sortByTags);
  const filterByPriority = getFilterByPriority(filterByTags, sortByPriority);
  const filterByDate = getFilterByDate(filterByPriority, sortByDate);

  return filterByDate || [];
};

export { FilterHook };
