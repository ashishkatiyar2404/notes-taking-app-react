import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar";
import LandingPage from "./Pages/LandingPage/LandingPage";
import Home from "./Pages/Home/Home";
import Label from "./Pages/Label/Label";
import Archive from "./Pages/Archive/Archive";
import Trash from "./Pages/Trash/Trash";
import "./App.css";

function App() {
  return (
    <div className="app_div">
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Label" element={<Label />} />
          <Route path="/Archive" element={<Archive />} />
          <Route path="/Trash" element={<Trash />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
