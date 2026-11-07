import React from "react";
import { useFilter } from "../../Context/FilterContext";
import { useNote } from "../../Context/NoteContext";
import "./Filters.css";

const Filters = () => {
  const { initialFilter, filterInitialState, filterDispatch } = useFilter();
  const { notes } = useNote();

  const datePills = [
    { label: "Oldest first", value: "oldToNew" },
    { label: "Newest first", value: "newToOld" },
  ];

  const tagPills = [
    { label: "Work", value: "work" },
    { label: "Health", value: "health" },
    { label: "Exercise", value: "exercise" },
    { label: "Chores", value: "chores" },
  ];

  const priorityPills = [
    { label: "High", value: "high" },
    { label: "Medium", value: "medium" },
    { label: "Low", value: "low" },
  ];

  return (
    <div className="filter__Container">
      {notes && (
        <div className="note-filter-sidebar">
          {/* Header */}
          <div className="clearAll-flex">
            <span className="filter__section-title">Filters &amp; Sort</span>
            <button
              type="button"
              className="clearAll"
              onClick={() =>
                filterDispatch({
                  type: "CLEAR_ALL",
                  payload: { ...initialFilter },
                })
              }
            >
              Clear All
            </button>
          </div>

          {/* Sort by Date */}
          <div>
            <p className="filter__section-title" style={{ marginBottom: "0.4rem" }}>
              DATE
            </p>
            <div className="filter__group">
              {datePills.map((pill) => (
                <button
                  key={pill.value}
                  type="button"
                  className={`filter-pill${
                    filterInitialState.sortByDate === pill.value ? " active" : ""
                  }`}
                  onClick={() =>
                    filterDispatch({
                      type: "SORT_BY_DATE",
                      payload:
                        filterInitialState.sortByDate === pill.value
                          ? "none"
                          : pill.value,
                    })
                  }
                >
                  {pill.label}
                </button>
              ))}
            </div>
          </div>

          {/* Sort by Tags */}
          <div>
            <p className="filter__section-title" style={{ marginBottom: "0.4rem" }}>
              TAGS
            </p>
            <div className="filter__group">
              {tagPills.map((pill) => (
                <button
                  key={pill.value}
                  type="button"
                  className={`filter-pill${
                    filterInitialState.sortByTags?.includes(pill.value)
                      ? " active"
                      : ""
                  }`}
                  onClick={() =>
                    filterDispatch({
                      type: "SORT_BY_TAGS",
                      payload: pill.value,
                    })
                  }
                >
                  {pill.label}
                </button>
              ))}
            </div>
          </div>

          {/* Sort by Priority */}
          <div>
            <p className="filter__section-title" style={{ marginBottom: "0.4rem" }}>
              PRIORITY
            </p>
            <div className="filter__group">
              {priorityPills.map((pill) => (
                <button
                  key={pill.value}
                  type="button"
                  className={`filter-pill${
                    filterInitialState.sortByPriority === pill.value
                      ? " active"
                      : ""
                  }`}
                  onClick={() =>
                    filterDispatch({
                      type: "SORT_BY_PRIORITY",
                      payload:
                        filterInitialState.sortByPriority === pill.value
                          ? "none"
                          : pill.value,
                    })
                  }
                >
                  {pill.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Filters;
