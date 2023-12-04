import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const oasisAlbums = [
  {title: 'Definitely Maybe', year:1994, id:1},
  {title:'Whats the Story Morning Glory', year:1995, id:2},
  {title:'Be Here Now', year:1997, id:3},
  {title:'The Masterplan', year:1998, id:4},
  {title:'Standing on the Shoulders of Giants', year:2000, id:5},
  {title:'Heathen Chemistry', year:2002, id:6},
  {title:'Dont Believe the Truth', year:2005, id:7},
  {title:'Dig Out Your Soul', year:2008, id:8}


]


const albumList = oasisAlbums.map(album => 
  <li key={album.id}>

  {album.title}: {album.year}
  </li>)

const intro = (
  <div>
  <p>Bursting onto the britpop scene in 1994, Oasis were a force to be reckoned with during the mid-late 90's. Their genre is britpop/rock</p>
  <p>The band consided of the famous Gallagher brothers: Liam Gallaher and Noel Gallagher</p>
  <p>Their sophomore album What's the Story Morning Glory catapulted the band to superstar status. It is considered one of the greatest albums ever made and remains one of the UKs 
    greatest selling albums.
  </p>
  <p>The band split for good in 2008 after a heated argument between Liam and Noel. Nowadays, Liam has a successful solo career and Noel fronts his band 'Noel Gallaghers's 
    High Flying Birds.
  </p>

</div>
)

function App() {
  
  const [counter, setCounter] = useState(0)
  
  const likeBtn = () => {
    setCounter(previousState => previousState+1)
  }
  const dislikeBtn = () => {
    setCounter(previousState => previousState-1)
  }
  return (
    <>
    <h1>Oasis' greatest albums</h1>
    {/* <br /> */}
    <p>{intro}</p>
    <br />
    <h2>Album List</h2>
    <ul>{albumList}</ul>
    <h3>Like: { counter }</h3>
    <button onClick={likeBtn}>Like</button>
    <button onClick={dislikeBtn}>Dislike</button>

    </>
  )
}

export default App
