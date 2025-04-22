// src/components/DarkModeToggle.tsx
import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "../contexts/ThemeContext";

function DarkModeToggle() {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <div
      onClick={toggleDarkMode}
      className="cursor-pointer p-2 rounded-full bg-primary dark:bg-dark-primary flex items-center justify-center"
    >
      {darkMode ? (
        <FaSun className="text-light text-lg" />
      ) : (
        <FaMoon className="text-light text-lg" />
      )}
    </div>
  );
}

export default DarkModeToggle;
