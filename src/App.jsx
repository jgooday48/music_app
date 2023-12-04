import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const oasisAlbums = [ // object with all Oasis albums
  {title: 'Definitely Maybe', year:1994, id:1},
  {title:'Whats the Story Morning Glory', year:1995, id:2},
  {title:'Be Here Now', year:1997, id:3},
  {title:'The Masterplan', year:1998, id:4},
  {title:'Standing on the Shoulders of Giants', year:2000, id:5},
  {title:'Heathen Chemistry', year:2002, id:6},
  {title:'Dont Believe the Truth', year:2005, id:7},
  {title:'Dig Out Your Soul', year:2008, id:8}


]



const intro = ( // Intro statement
  <div>
  <p>Bursting onto the britpop scene in 1994, Oasis were a force to be reckoned with during the mid-late 90's. Their genre is britpop/rock.</p>
  <p>The band consisted of the famous Gallagher brothers: Liam Gallaher and Noel Gallagher. They infamously had several sibling arguments and are known for not getting along
    with each other
  </p>
  <p>Their sophomore album What's the Story Morning Glory catapulted the band to superstar status. It is considered one of the greatest albums ever made and remains one of the UK's 
    greatest selling albums. The album contains their biggest hits such as Wonderwall and Don't Look Back in Anger.
  </p>
  <p>The band split for good in 2008 after a heated argument between Liam and Noel. Nowadays, Liam has a successful solo career and Noel fronts his band 'Noel Gallagher's
    High Flying Birds.
  </p>

</div>
)


const albumExplainer = (
  <div>
    <p>Listed below are all 7 of Oasis' albums and their B-side compliation album The Masterplan.</p>
    <p>If you liked any of the albums, you can click the like button to the right of the entry.</p>
  </div>
)

const formExplainer = (
  <div>

    <p>Comment here about why you enjoyed Oasis or if you have any critisism</p>
  </div>
)

function App() {
  const [likeCounters, setLikeCounters] = useState(Array(oasisAlbums.length).fill(0)) // initialise a new array, fills with 0s for each album
  const [inputText, setInputText] = useState('')
  const [comments, setComments] = useState([]) 

  const likeBtn = (index) => {// allows only the album in question to be liked if the corresponding button is clicked
    setLikeCounters((prevCounters) => {
      const newCounters = [...prevCounters]
      newCounters[index] = newCounters[index] === 0 ? 1 : newCounters[index] - 1
      return newCounters
    })
  }

  const albumList = oasisAlbums.map((album, index) => (// add each album to a list with a button beside it
    <li key={album.id}>
      {album.title}: {album.year}
      <button onClick={() => likeBtn(index)}> {likeCounters[index]} Likes</button> 
    </li>
  ))


  const handleInput = (e) => {
      setInputText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setComments((prevComments) => [...prevComments, inputText])

    setInputText('')
  }

  return (
    <div>
      <h1>Oasis Portfolio</h1>
      <p>{intro}</p>
      <h2>Album List</h2>
      <p>{albumExplainer}</p>
      <ul>{albumList}</ul>

    <h3>Comments</h3>
    <p>{formExplainer}</p>
      <form onSubmit={handleSubmit}>
        <input type="text"
        value={inputText}
        onChange={handleInput}
        
        />
        <button type="submit"
        onSubmit={handleSubmit}
        
        >Submit Comment</button>
    </form>

    {comments.map((comment, index)=> (
      <p key={index}>{comment}</p>
    ))}

    </div>
  )
}


export default App
