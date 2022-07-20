import { Route, Routes } from "react-router-dom";
import Mockman from "mockman-js";
import Navbar from "./Components/Navbar/Navbar";
import LandingPage from "./Pages/LandingPage/LandingPage";
import Home from "./Pages/Home/Home";
import Label from "./Pages/Label/Label";
import Archive from "./Pages/Archive/Archive";
import Trash from "./Pages/Trash/Trash";
import RichTextEditor from "./Components/RichTextEditor/RichTextEditor";
import "./App.css";
import Login from "./Pages/Auth/Login/Login";
import SignUp from "./Pages/Auth/SignUp/SignUp";
import AuthRequire from "./Pages/Auth/AuthRequire";

function App() {
  return (
    <div className="app_div">
      <Navbar />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Label" element={<Label />} />
        <Route path="/Archive" element={<Archive />} />
        <Route path="/Trash" element={<Trash />} />
        <Route path="/richTextEditor" element={<RichTextEditor />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/mockman" element={<Mockman />} />

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
