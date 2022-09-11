import "./App.css";
import Navbar from "./Components/Navbar";
import React, { useState } from "react";
import TextForm from "./Components/TextForm";

function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
    } else {
      setMode("light");
    }
  };

  return (
    <div
      className="App"
      style={{ backgroundColor: mode === "light" ? "white" : "gray", color: mode ==="light"? "black":"white" }}
    >
      <Navbar mode={mode} toggleMode={toggleMode} />
      <div className="container">
        <TextForm mode={mode}/>
      </div>
    </div>
  );
}

export default App;
