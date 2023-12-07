import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import './style.css'


const NavBar = () => {
    const activeStyle = {
      textDecoration: "underline",
      color: "darkblue"
    }
  
    return (
      <>
      <nav>
       
        <ul className="nav-links">
          <li>
            <NavLink to="/" style={({ isActive }) => (isActive ? activeStyle : undefined)}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/about" style={({ isActive }) => (isActive ? activeStyle : undefined)}>About</NavLink>
          </li>

          <li>
            <NavLink to="/discography" style={({ isActive }) => (isActive ? activeStyle : undefined)}>Discography</NavLink>
          </li>
          <li>
            <NavLink to="/login" style={({ isActive }) => (isActive ? activeStyle : undefined)}>Login</NavLink>
          </li>
  
  
        </ul>
      </nav>
  
      <Outlet/>
  
      
      
      </>
    );
  }
  
  export default NavBar
