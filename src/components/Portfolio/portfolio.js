import React from "react"
import {Link} from "react-router-dom"

import "./portfolio.css"
import "../site.css"

const Portfolio = () => {


    return (
    <div>
        <header class="header-name">Tuna865
        {/* this needs to get changed to a React style navbar */}
        <nav>
            <a href="index.html">Home</a>
            <a href="portfolio.html">Portfolio</a>
            <a href="about.html">About</a>
        </nav>
    </header>
    <main>
    <h1>Projects:</h1>
        <section>
            <h2>Personal Site</h2>
            <p>
                In addition to being my portfolio, this site was the first real project I created! 
                I am sure many more will follow but for now 
                
            </p>
            <p>
                Fuga dolore impedit suscipit, vero odit, sequi in deleniti, odio ipsa facere et. 
                Consequatur modi cum ullam adipisci unde amet qui sed odio officia ipsa omnis earum 
                quibusdam, dolor totam?
            </p>
        </section>
        <section>
            <h2><a href="https://rubber-ducks-r-us.herokuapp.com/">Ducks 'R' Us</a></h2>
            <ul>
                <li>Built using <i>JavaScript, React.js, Express.js, CSS, Node.js, </i>& <i>PostgreSQL</i></li>
                <li>Created dummy data in the database to facilitate easier front end component creation</li>
                <li>Established Administrator options, such as editing or deleting all registered users and all products</li>
                <li>Designed an Administrator page that is only visible upon logging in with admin credentials</li>
                <li>Deployed using Heroku cloud application platform</li>
            </ul>
            <a href="https://rubber-ducks-r-us.herokuapp.com/"></a>
        </section>
        <section>
            <h2>Project #3</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi at earum 
                fuga harum alias nobis, eaque optio laudantium dolor sed eligendi consequatur 
                distinctio aperiam accusantium, architecto exercitationem perferendis minus error.
            </p>
            <p>
                Fuga dolore impedit suscipit, vero odit, sequi in deleniti, odio ipsa facere et. 
                Consequatur modi cum ullam adipisci unde amet qui sed odio officia ipsa omnis earum 
                quibusdam, dolor totam?
            </p>
        </section>
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

export default Portfolio