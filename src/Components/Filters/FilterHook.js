import { useFilter } from "../../Context/FilterContext";
import { useNote } from "../../Context/NoteContext";

const FilterHook = () => {
  const { filterInitialState } = useFilter();
  const { notes } = useNote();
  const newFilterNotes = [...notes];

  const { sortByDate, sortByTags, sortByPriority } = filterInitialState;

  const getFilterByTags = (notesArr, tags) => {
    console.log("get Filter by tags");
    if (tags.length > 0) {
      console.log("get Filter by tags if k andr");
      return notesArr.filter((note) => tags.includes(note.Tags));
    } else {
      console.log("get Filter by tags else k andr");
      return notesArr;
    }
  };

  const getFilterByPriority = (notesArr, selectedPriority) => {
    console.log("filter by priority");
    return selectedPriority !== "" && selectedPriority !== "none"
      ? notesArr.filter(
          (note) => note.Priority.toLowerCase() === selectedPriority
        )
      : notesArr;
  };

  const getFilterByDate = (notesArr, date) => {
    console.log("get Filter by data");
    if (date === "oldToNew") {
      console.log("get Filter by data if k andr");
      let sortedNotes = [...notesArr].sort((a, b) => {
        let firstDate = new Date(a.date);
        let lastDate = new Date(b.date);
        return firstDate.getTime() - lastDate.getTime();
      });
      return sortedNotes;
    } else if (date === "newToOld") {
      console.log("get Filter by data else if k andr");
      let sortedNotes = [...notesArr].sort((a, b) => {
        let firstDate = new Date(a.date);
        let lastDate = new Date(b.date);
        return lastDate.getTime() - firstDate.getTime();
      });
      return sortedNotes;
    } else {
      console.log("get Filter by data else  k andr");
      return notesArr;
    }
  };

  const filterByTags = getFilterByTags(newFilterNotes, sortByTags);
  const filterByPriority = getFilterByPriority(filterByTags, sortByPriority);
  const filterByDate = getFilterByDate(filterByPriority, sortByDate);

  if (filterByDate === undefined || filterByDate.length === 0) {
    return notes;
  }

  // console.log(filterByDate);
  return filterByDate;
};

export { FilterHook };
