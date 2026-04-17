import { useState } from 'react'
import { Homepage } from './pages/Homepage';
import { Routes, Route } from "react-router";
import './App.css'

function App() {
  const [ lightmode, setLightmode ] = useState(false);

  const [ isOpen, setIsopen ] = useState(false);

  return (
    <Routes>
      <Route path="/" element={<Homepage lightmode={lightmode} setLightmode={setLightmode} isOpen={isOpen} setIsopen={setIsopen} />} />
    </Routes>
  )
}

export default App
