import React from 'react'

function Navbar() {
  return (
    <div className='container'>
        <h1>VMDB</h1>
      <ul className='list'>
        <li>
           <a href="#">Home</a>
        </li>
        <li>
           <a href="">Movies</a>
        </li>
        <li>
            <a href="">TV Shows</a>
        </li>
        <li>
            <a href="">People</a>
        </li>
        <li>
            <a href="">More</a>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
