import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import "./App.css"
import MovieList from './MovieList'
import Footer from './Footer'


function App() {
  const [movies,setMovies] = useState([])


  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/popular?&api_key=043a039eb3c3d699c798a702a9cbca1a`)
    .then((res)=>res.json())
    .then(data => {
      console.log(data)
      setMovies(data.results);
    })

  },[])

  return (
    <>
    <div>
      <Navbar/>
      <div className='row'> 
      {movies.map((movieReq)=><MovieList key={movieReq.id} {...movieReq}/>)}
      </div>
     
    </div>
      
    <Footer/>
    </>
  )
}

export default App
