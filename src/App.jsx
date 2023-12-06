import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Submit, Albums, IntroText } from './components'
import { NavBar } from './layout'
import * as Pages from './pages'
import './App.css'



function App() {


  return (
    <div>


 {/* <NavBar/> */}
 <Routes>

<Route path="/" element={<NavBar/>}>

  <Route path="/" index element={<Pages.Home />}/>
  <Route path="/about" element={<Pages.About />}/>
  </Route>


</Routes>

    </div>
  )
}


export default App
