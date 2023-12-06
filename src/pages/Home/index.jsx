import React, { useState } from 'react'
import * as components from '../../components'
const Home = () => {
  const [likeCounters, setLikeCounters] = useState([0]) // initialise a new array, fills with 0s for each album
  const [inputText, setInputText] = useState('')
  const [comments, setComments] = useState([]) // initialise empty array for comments
  return (
    <div>

      <h1>Oasis Portfolio</h1>
      <components.IntroText />
      
      <h2>Album List</h2>
      < components.Albums likeCounters={likeCounters} setLikeCounters={setLikeCounters}/>

      <h3>Comments</h3>


      <components.Submit inputText={inputText} setInputText={setInputText} comments={comments} setComments= {setComments}/>
    </div>
  )
}

export default Home
