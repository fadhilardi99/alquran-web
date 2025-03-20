import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import HomePage from "./pages/Homepage";
import DetailSurahPage from "./pages/DetailSurahPage";
// import DetailSurah from "./components/DetailSurah/DetailSurah";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/surah/:surahId" element={<DetailSurahPage />} />
      </Routes>
    </Router>
  );
}

export default App;
