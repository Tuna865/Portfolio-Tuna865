import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./Home/home"
import Portfolio from "./Portfolio/portfolio"
import About from "./About/about"
import Navbar from "./Navbar/navbar"

import "./site.css"

const App = () => {
    
    return(
    <div>
        <header>
            <Navbar />
        </header>
        <main>
            <Router>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/about">
                    <About />
                </Route>
                <Route exact path="/portfolio">
                    <Portfolio />
                </Route>
            </Router>
        </main>
    </div>
    )





}

export default App