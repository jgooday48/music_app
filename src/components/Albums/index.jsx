import React, { useState } from 'react'

const Albums = () => {

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

    const [likeCounters, setLikeCounters] = useState(Array(oasisAlbums.length).fill(0)) // initialise a new array, fills with 0s for each album

  
    const likeBtn = (index) => {// allows only the album in question to be liked if the corresponding button is clicked
      setLikeCounters((prevCounters) => {
        const newCounters = [...prevCounters]
        newCounters[index] = newCounters[index] === 0 ? 1 : newCounters[index] - 1 // ternary statement allows only one like to be added to each song
        return newCounters
      })
    }
    
    const albumList = oasisAlbums.map((album, index) => (// add each album to a list with a button beside it
    <li key={album.id}>
      {album.title}: {album.year}
      <button onClick={() => likeBtn(index)}> {likeCounters[index]} Likes</button> 
    </li>
    ))

    return (

        <ul>{albumList}</ul>

    )
}

export default Albums
