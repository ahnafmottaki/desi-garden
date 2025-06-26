import { useEffect, useState } from "react";
import { ThemeContext } from "./ThemeContext";

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    const currentTheme = localStorage.getItem("theme");
    return currentTheme || "light";
  });
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      if (prevTheme === "light") {
        return "dark";
      }
      return "light";
    });
  };
  const themeCtx = { theme, toggleTheme };
  return (
    <ThemeContext.Provider value={themeCtx}>{children}</ThemeContext.Provider>
  );
}
