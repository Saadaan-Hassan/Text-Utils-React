import './App.css';
import Navbar from './Components/Navbar';
import React, { useState } from 'react'
import TextForm from './Components/TextForm';


function App() {
  const [mode, setMode] = useState("light")

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode("dark")
    }
    else{
      setMode("light")
    }
  }

  return (
    <div className="App">
      <Navbar mode={mode} toggleMode={toggleMode}/>
      <TextForm/>
    </div>
  );
}

export default App;
