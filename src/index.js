import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { AuthProvider } from "./Context/AuthContext";
import { NoteProvider } from "./Context/NoteContext";
import { BrowserRouter as Router } from "react-router-dom";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <NoteProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </NoteProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
