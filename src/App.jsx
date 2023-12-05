import React, { useState } from 'react'
import { Submit, Albums } from './components'
import './App.css'




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
  const [likeCounters, setLikeCounters] = useState([0]) // initialise a new array, fills with 0s for each album
  const [inputText, setInputText] = useState('')
  const [comments, setComments] = useState([]) // initialise empty array for comments




  return (
    <div>
      <h1>Oasis Portfolio</h1>
      <p>{intro}</p>
      
      <h2>Album List</h2>
      <p>{albumExplainer}</p>
      < Albums likeCounters={likeCounters} setLikeCounters={setLikeCounters}/>

    <h3>Comments</h3>
    <p>{formExplainer}</p>

    <Submit inputText={inputText} setInputText={setInputText} comments={comments} setComments= {setComments}/>



    </div>
  )
}


export default App
