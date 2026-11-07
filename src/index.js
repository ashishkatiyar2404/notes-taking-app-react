import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { AuthProvider } from "./Context/AuthContext";
import { NoteProvider } from "./Context/NoteContext";
import { BrowserRouter as Router } from "react-router-dom";
import { FilterProvider } from "./Context/FilterContext";

// Call make Server
makeServer();

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <NoteProvider>
          <FilterProvider>
            <App />
          </FilterProvider>
        </NoteProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>
);
