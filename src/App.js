import React from "react";
import {BrowserRouter, Routes, Route, } from 'react-router-dom'
import Login from "./Components/Login";
// import Sign_in from "./Components/Sign_in";

function App() {
  return(
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        {/* <Route path="/Sign-in" element={<Sign_in/>}/> */}
      </Routes>
    </BrowserRouter>
  </>
  )
}
export default App;

