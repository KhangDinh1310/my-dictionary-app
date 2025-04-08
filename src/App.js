import React, { useState, useEffect } from "react";
import Dictionary from "./components/Dictionary";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="App">
      <div className="container">
        <div style={{ position: "absolute", top: "20px", right: "20px" }}>
          <button onClick={toggleDarkMode} style={{
            padding: "8px 16px",
            borderRadius: "20px",
            border: "none",
            cursor: "pointer",
            background: darkMode ? "#555" : "#ddd",
            color: darkMode ? "#fff" : "#000"
          }}>
            {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </button>
        </div>

        <header className="App-header">
          <h1 className="heading">Dictionary</h1>
        </header>
        <main>
          <Dictionary defaultKeyword="aesthetic" />
        </main>
        <footer className="mt-5 footer">
          <div className="footer-content">
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;