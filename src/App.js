import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import sideBar from "./components/SideBar";
import Knowledge from "./sitepage/sitePage";
import Home from "./sitepage/Homepage";

function App() {
  return (
    <BrowserRouter>
      {sideBar()}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/knowledge" element={<Knowledge />} />
        <Route path="/members" element={<Knowledge />} />
        <Route path="/teams" element={<Knowledge />} />
        <Route path="/vault" element={<Knowledge />} />
        <Route path="/chat" element={<Knowledge />} />
        <Route path="/settings" element={<Knowledge />} />
        <Route path="/company" element={<Knowledge />} />
        <Route path="/myprofile" element={<Knowledge />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
