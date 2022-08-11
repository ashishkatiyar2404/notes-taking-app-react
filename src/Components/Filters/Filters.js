import React from "react";
import { useFilter } from "../../Context/FilterContext";
import { useNote } from "../../Context/NoteContext";
import "./Filters.css";

const Filters = () => {
  const { initialFilter, filterInitialState, filterDispatch } = useFilter();

  const { notes } = useNote();

  return (
    <div className="filter__Container">
      {notes && (
        <div className="note-filter-sidebar md-pd">
          <div className="clearAll-flex">
            <h3>Sort By Date</h3>
            <p
              className="clearAll"
              onClick={() =>
                filterDispatch({
                  type: "CLEAR_ALL",
                  payload: { ...initialFilter },
                })
              }
            >
              ClearAll
            </p>
          </div>
          <div className="filter">
            <label className="filter-pd">
              <input
                type="radio"
                className="filter-margin"
                onChange={() =>
                  filterDispatch({
                    type: "SORT_BY_DATE",
                    payload: "oldToNew",
                  })
                }
                checked={filterInitialState.sortByDate === "oldToNew"}
              />
              Sort from old to new
            </label>
            <label className="filter-pd">
              <input
                type="radio"
                className="filter-margin"
                onChange={() =>
                  filterDispatch({
                    type: "SORT_BY_DATE",
                    payload: "newToOld",
                  })
                }
                checked={filterInitialState.sortByDate === "newToOld"}
              />
              Sort from new to old
            </label>
          </div>
          <h3>Sort By Tags</h3>
          <div className="filter">
            <label className="filter-pd">
              <input
                type="checkbox"
                className="filter-margin"
                onChange={() =>
                  filterDispatch({ type: "SORT_BY_TAGS", payload: "work" })
                }
                checked={filterInitialState.sortByTags.includes("work")}
              />
              Work
            </label>
            <label className="filter-pd">
              <input
                type="checkbox"
                className="filter-margin"
                onChange={() =>
                  filterDispatch({
                    type: "SORT_BY_TAGS",
                    payload: "health",
                  })
                }
                checked={filterInitialState.sortByTags.includes("health")}
              />
              Health
            </label>
            <label className="filter-pd">
              <input
                type="checkbox"
                className="filter-margin"
                onChange={() =>
                  filterDispatch({
                    type: "SORT_BY_TAGS",
                    payload: "exercise",
                  })
                }
                checked={filterInitialState.sortByTags.includes("exercise")}
              />
              Exercise
            </label>
            <label className="filter-pd">
              <input
                type="checkbox"
                className="filter-margin"
                onChange={() =>
                  filterDispatch({
                    type: "SORT_BY_TAGS",
                    payload: "chores",
                  })
                }
                checked={filterInitialState.sortByTags.includes("chores")}
              />
              Chores
            </label>
          </div>
          <h3>Sort By Priority</h3>
          <div className="filter">
            <label className="filter-pd">
              <input
                type="radio"
                className="filter-margin"
                onChange={() =>
                  filterDispatch({
                    type: "SORT_BY_PRIORITY",
                    payload: "high",
                  })
                }
                checked={filterInitialState.sortByPriority === "high"}
              />
              High
            </label>
            <label className="filter-pd">
              <input
                type="radio"
                className="filter-margin"
                onChange={() =>
                  filterDispatch({
                    type: "SORT_BY_PRIORITY",
                    payload: "medium",
                  })
                }
                checked={filterInitialState.sortByPriority === "medium"}
              />
              Medium
            </label>
            <label className="filter-pd">
              <input
                type="radio"
                className="filter-margin"
                onChange={() =>
                  filterDispatch({
                    type: "SORT_BY_PRIORITY",
                    payload: "low",
                  })
                }
                checked={filterInitialState.sortByPriority === "low"}
              />
              Low
            </label>
          </div>
        </div>
      )}
    </div>
  );
};

export default Filters;
