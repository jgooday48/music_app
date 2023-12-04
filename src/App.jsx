import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const oasisAlbums = [
  {title: 'Definitely Maybe', year:1994, id:1},
  {title:'Whats the Story Morning Glory', year:1995, id:2},

]


const albumList = oasisAlbums.map(album => 
  <li key={album.id}>

    {album.title}
  </li>)

const intro = (
  <div>
  <p>Bursting onto the britpop scene in 1994, Oasis were a force to be reckoned with during the mid-late 90's.</p>

</div>
)

function App() {

  return (
    <>
    <h1>Oasis' greatest albums</h1>
    {/* <br /> */}
    <p>{intro}</p>
    <ul>{albumList}</ul>

    </>
  )
}

export default App
