import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";

import HomePage from "./pages/Homepage";
import DetailSurahPage from "./pages/DetailSurahPage";
import { BookmarkProvider } from "./contexts/BookmarkContext";

function App() {
  return (
    <ThemeProvider>
      <BookmarkProvider>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/surah/:surahId" element={<DetailSurahPage />} />
          </Routes>
        </Router>
      </BookmarkProvider>
    </ThemeProvider>
  );
}

export default App;
