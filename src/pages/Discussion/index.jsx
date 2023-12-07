import React, { useState } from 'react'
import * as components from '../../components'
// import { defaultInclude } from 'vitest/dist/config'
const Discussion = () => {
    const [inputText, setInputText] = useState('')
    const [comments, setComments] = useState([]) // initialise empty array for comments
    return (
      <div>
  
    
        <h1>Comments</h1>
  
  
        <components.Submit inputText={inputText} setInputText={setInputText} comments={comments} setComments= {setComments}/>
      </div>
    )

} 

export default Discussion
