import React from 'react'
import './Home.css'

function Home() {
  return (
    <div>
      <div className="main">
      <nav>
            <h1>SPORTY SPACES</h1>
            <ul>
                <li><a href="/bookings">My Bookings</a></li>
                <li><a href="/create">Add Spaces</a></li>
                <li><a href="/contact">Contact</a></li>
                <li><a href="/login">Login</a></li>
                <li><a href="/signup">Sign Up</a></li>
            </ul>
        </nav>
        <hr/>
      </div>
    </div>
  )
}

export default Home