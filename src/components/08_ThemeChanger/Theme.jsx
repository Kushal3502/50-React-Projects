import React from "react";
import useTheme from "./useTheme";
import "./style.css";

function Theme() {
  const [theme, setTheme] = useTheme("theme", "dark");

  function toggleTheme() {
    setTheme(theme == "dark" ? "light" : "dark");
  }

  console.log(theme);

  return (
    <div className="container" data-theme={theme}>
      <div className="theme-container">
        <p>Theme Changer Project</p>
        <button onClick={toggleTheme}>Change Theme</button>
      </div>
    </div>
  );
}

export default Theme;
