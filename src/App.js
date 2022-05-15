import "./App.css";

import { Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar.jsx";
import TeamPage from "./Pages/TeamPage/TeamPage.jsx";
import JourneyPage from "./Pages/JourneyPage/JourneyPage.jsx";
import StorePage from "./Pages/StorePage/StorePage.jsx";
import ContactPage from "./Pages/ContactPage/ContactPage.jsx";
import HomePage from "./Pages/HomePage/HomePage.jsx";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/store" element={<StorePage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/journey" element={<JourneyPage />} />
      </Routes>
    </div>
  );
}

export default App;
