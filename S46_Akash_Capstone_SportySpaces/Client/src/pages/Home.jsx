import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className='main'>
        <nav>
            <h1>SPORTY SPACES</h1>
            <ul>
                <li><a href="/about">My Bookings</a></li>
                <li><a href="/contact">Add Spaces</a></li>
                <li><a href="/products">Contact</a></li>
                <li><a href="/blog">Login</a></li>
                <li><a href="/blog">Sign Up</a></li>
            </ul>
        </nav>
        <hr />
        <div className='search'>
            <input type="text" placeholder="Search for playgrounds"/>
            <button>Search</button>     
        </div>
        <div className="container">
            <div className="grounds-list">
                <img className="images" src="https://media.istockphoto.com/id/1488747416/photo/the-picture-shows-an-artificial-grass-football-field-ready-for-a-match-for-5-7-players.jpg?s=612x612&w=0&k=20&c=4-Q4dE52VZLTO2jmZaP0MukzyOzIF2xtndxrfB4vmLQ=" alt="soccer ground"/>
                <div className="right">
                    <h2>Green Turf</h2>
                    <p>West street, Saravanampatti, Coimbatore, Tamil Nadu, India</p>
                    <p>Easy to reach : 10 min walk</p>
                    <p><b>2</b> parking spaces</p>
                    <p>Contact : +91 987654321</p>
                </div>
            </div>
            <div className="grounds-list">
                <img className="images" src="https://fitoverse.com/wp-content/uploads/2022/02/soccer-ball-green-artificial-turf-corner-football-field-blurry-players-background-kick-kid-training-match-175569686.jpeg" alt="football field"/>
                <div className="right">
                    <h2>City Sports Arena</h2>
                    <p>East Road, Gandhipuram, Coimbatore, Tamil Nadu, India</p>
                    <p>Easy to reach : 15 min drive</p>
                    <p><b>10</b> parking spaces</p>
                    <p>Contact : +91 1234567890</p>
                </div>
            </div>  
        </div>
    </div>
  );
}

export default Home;