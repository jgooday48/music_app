import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { NavBar } from './layout'
import * as Pages from './pages'
import './App.css'

import { AuthProvider } from "./contexts"

function App() {


  return (
    <div>


 {/* <NavBar/> */}
 <Routes>

  <Route path="/" element={<NavBar/>}>

  <Route path="/" index element={<Pages.Home />}/>
  <Route path="/about" element={<Pages.About />}/>
  <Route path="/discography" element={<Pages.Discography />}/>
  <Route path="login" element={<Pages.Login/>}/>
  </Route>


</Routes>

    </div>
  )
}


export default App
