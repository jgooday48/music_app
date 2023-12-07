import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { NavBar } from './layout'
import ProtectedRoute from "./routes"
import * as Pages from './pages'
import './App.css'

import { AuthProvider } from "./contexts"


function App() {



  return (
  <>
    <AuthProvider>
      <Routes>

          <Route path="/" element={<NavBar/>}>

          <Route path="/" index element={<Pages.Home />}/>
          <Route path="/about" element={<Pages.About />}/>
          <Route path="/discography" element={<Pages.Discography />}/>

          <Route path='/' element={<ProtectedRoute redirectTo="/login" />}>
            <Route path="/thread" element={<Pages.Discussion />}/>
          </Route>

          <Route path="/login" element={<Pages.Login/>}/>
          <Route path="/signup" element={<Pages.Signup/>}/>
          <Route path="*" element={<h1>{location.pathname} page does not exist</h1>} />

        </Route>


      </Routes>
    </AuthProvider>

  </>


  )
}


export default App
