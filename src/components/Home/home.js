import React from "react"
import {Link} from "react-router-dom"

import "./home.css"
import "../site.css"

const Home = () => {
    

    return (
    <div>
    <header>
        {/* this needs to get changed to a React style navbar */}
        <span class="header-name">Turner Milan</span>
        <nav class="navbar">
            <a href="about.html">About</a>
            <a href="portfolio.html">Portfolio</a>
            <a href="index.html">Home</a>
        </nav>
    </header>
    
    <main>
        <h1>Fanatic, Discoverer, Builder.</h1>
        <h2>Seeking a career that will be rewarding, challenging, 
            and <a class= "gotcha"href= "https://www.youtube.com/watch?v=dQw4w9WgXcQ">entertaining</a> for years to come.
        </h2>
            <h3 class="BattleBorn">"You never shine if you never burn"
            
            -Brandon Flowers of <i>The Killers</i>
        </h3>
    </main>
    <footer>
        <a href= "https://www.linkedin.com/in/turner-milan/">
            <img class= "social-links" src= "Images/LinkedInLogo.png"/> 
        </a>
        <a href= "https://github.com/Tuna865">
            <img class="social-links" src= "Images/GitHub-Mark.png"/>
        </a>
        <a href= "https://open.spotify.com/user/1297311412?si=245311b0f2154fca">
            <img class="social-links" src= "Images/SpotifyLogo.png"/>
        </a>
    </footer>
    </div>
    )
}

export default Home