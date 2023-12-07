import React, { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../contexts'
// import './style.css'

const Signup = () => {
  const [inputValue, setinputValue] = useState('')
  const [inputValuep, setinputValuep] = useState('')
  const [inputValuee, setinputValuee] = useState('')
  const inputRef = useRef()
  const navigate = useNavigate()
  const { setUser } = useAuth()

  useEffect(() => {
    inputRef.current.focus()
  },[])

  const handleInput = (e) => {
    console.log(e.target.value)
    setinputValue(e.target.value)
  }

  const handleInputp = (e) => {
    console.log(e.target.value)
    setinputValuep(e.target.value)
  }

  const handleInpute = (e) => {
    console.log(e.target.value)
    setinputValuee(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setUser(inputValue)
    navigate('/')
  }

  return (

    <>
    
    <h1>Sign Up</h1>
    <form
      aria-label='sign in'
      onSubmit={handleSubmit}
    >
      <label htmlFor="email" className="mr10">Email</label>
            <input
              type="text"
              id="email"
              autoComplete="off"
              value={inputValuee}
              onChange={handleInpute}
              ref={inputRef}
              required
            />
      <label htmlFor="username" className="mr10">Username</label>
      <input
        type="text"
        id="username"
        autoComplete="off"
        value={inputValue}
        onChange={handleInput}
        ref={inputRef}
        required
      />

      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        autoComplete="off"
        value={inputValuep}
        onChange={handleInputp}
        ref={inputRef}
        required
      />

      <input id="submit" type="submit" />
    </form>
    </>
  );
}

export default Signup
