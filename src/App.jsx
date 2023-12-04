import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const bowieAlbums = [
  {title: 'Station to Station', year:1976, id:1},
  {title:'Low', year:1977, id:2},
  {title:'Heroes', year:1977, id:3},
  {title:'Let\'s Dance', year:1983, id:4}
]


const albumList = bowieAlbums.map(album => 
  <li key={album.id}>

    {album.title}
  </li>)

function App() {

  return (
    <>
    <h1>David Bowie's greatest albums</h1>
    <br />
    <ul>{albumList}</ul>

    </>
  )
}

export default App
