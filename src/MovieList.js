import React from 'react'

function MovieList({title,poster_path,vote_average,release_date,overview}) {
  return (

    <div className='card'>
    
    
       
        
      <h1>{title}</h1>
      <img src={"https://image.tmdb.org/t/p/w500/"+poster_path} height="150" width="100"/>
      <p>{overview}</p>
      <h4>Vote:{vote_average}</h4>
      <h4>Release Date:{release_date}</h4>
      

    
    </div>
   
  )
}

export default MovieList
