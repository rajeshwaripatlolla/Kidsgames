import React from "react";

import "./Settings.css";
import { useTheme } from "./ThemeContect";

const Settings = () => {
  const { theme, toggleTheme } = useTheme(); // Get theme and toggle function

  return (
    <div className="settings-page">
      <h2>Settings</h2>
      <div className="theme-toggle">
        <label>Theme:</label>
        <button onClick={toggleTheme}>
          {theme === "light" ? "Switch to Dark Theme" : "Switch to Light Theme"}
        </button>
      </div>
    </div>
  );
};

export default Settings;
