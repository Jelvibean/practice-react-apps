import { useContext } from "react";
import { ThemeContext } from "../../app/context/ThemeContext";

export function ThemeToggleButton() {
  // Directly destructure from ThemeContext and handle the null case
  const themeContext = useContext(ThemeContext);

  // Check if themeContext is null and throw an error if it is
  if (!themeContext) {
    throw new Error("ThemeToggleButton must be used within a ThemeProvider");
  }

  // After the null check, safely destructure the values
  const { theme, setTheme } = themeContext;

  return (
    <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      Switch to {theme === "light" ? "Dark" : "Light"} Mode
    </button>
  );
}
