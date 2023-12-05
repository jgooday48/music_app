import React, { useState } from 'react'


const Submit = () => {
    const [inputText, setInputText] = useState('');
    const [comments, setComments] = useState([]) // initialise empty array for comments

    const handleInput = (e) => { //handles comment input
        setInputText(e.target.value)
    }
    
    const handleSubmit = (e) => { // handles submission of comments
      e.preventDefault()
      setComments((prevComments) => [...prevComments, inputText])
      setInputText('')
    }

    return (
        <>
          <p>Comment here about why you enjoyed Oasis or if you have any critisism</p>
          <form onSubmit={handleSubmit}>
          <input type="text" value={inputText} onChange={handleInput}/>

          <button type="submit" onSubmit={handleSubmit}>Submit Comment</button>

            </form>

            {comments.map((comment, index)=> (
            <p key={index}>{comment}</p>
            ))}
        
        </>
    )
}

export default Submit
