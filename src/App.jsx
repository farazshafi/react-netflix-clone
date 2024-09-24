import React from "react"
import Home from "./pages/Home/Home"
import Login from "./pages/Login/Login"
import { Route, Routes } from "react-router-dom"
function App() {

  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </React.Fragment>
  )
}

export default App
