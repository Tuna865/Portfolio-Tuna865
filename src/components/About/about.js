import React from "react"
import {Link} from "react-router-dom"

import "./about.css"
import "../site.css"

const About = () => {


    return (
    <div>
        <header className="header-name">Turner Milan
        {/* this needs to get changed to a React style navbar */}
            <nav className="navbar">
                <a href="about.html">About</a>
                <a href="portfolio.html">Portfolio</a>
                <a href="index.html">Home</a>
            </nav>
        </header>
        <div>
            <h1>
                When I'm not at my day job or working on personal projects, 
                these are a few of my favorite pastimes:
            </h1>
            <section>
                <h2>Running</h2>
                <img className="pics-from-phone" src= "images/Half Marathon Pic.jpg" alt= "half marathon pic"/>
                    <p>
                        I played soccer growing up, so I have never been a stranger to running. 
                        However, I did not really enjoy it until June of 2021, and it was 3 months later that I 
                        decided to run a half marathon with one of my friends in Nashville, TN. 
                    </p>
                    <p>
                        When I finally crossed the finish line 13.1 miles later,
                        my time was 2 hours and 1 minute, running at roughly 8 minute 
                        30 second pace and gradually slowing down to slightly over a 9 minute pace. 
                        The course took us through some really picturesque areas of the Music City that I had never seen
                        (I also quickly realized that Nashville was not as flat as I thought it was).
                    </p>
                    <p>
                        Contrary to most people, I do not mind the negative side effects of running. 
                        It is certainly no secret that sometimes running is quite painful and exhausting, 
                        but in my mind the results are definitely worth it in the end; 
                        I plan on running another half marathon again in the future to beat my time.              
                    </p>
            </section>
            <section>
                <h2>Music</h2>
                <img className="pics-from-phone"src= "images/Midland Concert Pic.jpeg" alt= "Midland concert pic"/>
                    <p>
                        During the COVID-19 pandemic I realized I thoroughly enjoyed discovering new music; I began 
                        sharing it with my friends and others whenever possible.
                    </p>
                    <p>
                        Due to the pandemic I was obviously unable to attend any concerts, which was 
                        unfortunate. Just a few weeks before the pandemic started, I saw Tyler Childers and 
                        Sturgill Simpson in my hometown of Knoxville, Tennessee, and this created a drive to 
                        see more of my favorite artists live.
                    </p>
                    <p>
                        About a year later I was able to go to more concerts in 
                        Nashville and Knoxville, and during my time staying at home 
                        I had thoroughly organized my music into playlists. I plan on going to more concerts 
                        as soon as another band I like plays near where I live!
                    </p>
            </section>
            <section>
                <h2>Sports</h2>
                <img className="pics-from-phone"src= "images/Ole Miss Game pic.jpg" alt= "Ole Miss game pic"/>
                    <p>
                        I was raised by a family of Tennessee Volunteer fans, so I have been a 
                        fan of the Vols since I was a toddler. As I grew older I became a fan of 
                        more sports and more teams.
                    </p>
                    <p>
                        During my brief time as a freght conductor with a railroad in Pittsburgh,
                        Pennsylvania, I became a fan of the Steel City's professional sports teams. 
                        Although my time there was relatively short, I will always consider myself a strong fan
                        of the teams that all share black and gold as their colors.   
                    </p>
                    <p>
                        In addition to being a fan of the University of Tennessee and Pittsburgh's teams,
                        I also follow soccer teams from Munich, Germany (FC Bayern) and Milan, Italy (AC Milan). 
                        Unfortunately the time difference between the United States and Europe often 
                        makes it difficult to watch their matches live.
                    </p>
            </section>
        </div>
        <footer>
            <a href= "https://www.linkedin.com/in/turner-milan/">
                <img className= "social-links" src= "Images/LinkedInLogo.png"/> 
            </a>
            <a href= "https://github.com/Tuna865">
                <img className="social-links" src= "Images/GitHub-Mark.png"/>
            </a>
            <a href= "https://open.spotify.com/user/1297311412?si=245311b0f2154fca">
                <img className="social-links" src= "Images/SpotifyLogo.png"/>
            </a>
        </footer>
    </div>
    
    )
};

export default About