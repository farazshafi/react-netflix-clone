import React from "react"
import Home from "./pages/Home/Home"
import Login from "./pages/Login/Login"
import { Route, Routes } from "react-router-dom"
import Player from "./pages/Player/Player"
function App() {

  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/player/:id" element={<Player />} />
      </Routes>
    </React.Fragment>
  )
}

export default App
