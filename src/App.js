import { Route, Routes } from "react-router-dom";
import Mockman from "mockman-js";
import Navbar from "./Components/Navbar/Navbar";
import LandingPage from "./Pages/LandingPage/LandingPage";
import Home from "./Pages/Home/Home";
import Archive from "./Pages/Archive/Archive";
import Trash from "./Pages/Trash/Trash";
import RichTextEditor from "./Components/RichTextEditor/RichTextEditor";
import "./App.css";
import Login from "./Pages/Auth/Login/Login";
import SignUp from "./Pages/Auth/SignUp/SignUp";
import AuthRequire from "./Pages/Auth/AuthRequire";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    document.title = "Note Taking App";
  }, []);
  return (
    <div className="app_div">
      <Navbar />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/mockman" element={<Mockman />} />
        <Route
          path="/richTextEditor"
          element={
            <AuthRequire>
              <RichTextEditor />
            </AuthRequire>
          }
        />
        <Route
          path="/Archive"
          element={
            <AuthRequire>
              <Archive />
            </AuthRequire>
          }
        />
        <Route
          path="/Trash"
          element={
            <AuthRequire>
              <Trash />
            </AuthRequire>
          }
        />
        <Route
          path="/Home"
          element={
            <AuthRequire>
              <Home />
            </AuthRequire>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
