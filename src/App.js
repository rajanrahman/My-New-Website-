import React from "react";
import "./App.css";
import MainNavigation from "./Navigation/MainNavigation";
import Console from "./Console/Console";
import Project from "./Projects/Project";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="Home">
          <header>
            <MainNavigation />
          </header>
          <section className="Introduction">
            <div className="Title">
              <h1>Hey! I'm Rajan</h1>
              <h1>Full Stack Developer</h1>
            </div>
            <div className="About">
              <p>
                Welcome to my page! I'm an LA based developer. I went to UC
                Irvine where I obtained my B.S. in Computer Science. After
                graduation I interned at FreeFlows LLC and developed their web
                application using React. Currently I am looking for new
                positions where I can exercise my abilities and learn new skills{" "}
              </p>
              <p>
                While I am a big React nerd, I am open to using and learning any
                new languages/frameworks. Most of my experience falls in the
                MERN stack, and recently I have dived into ASP.NET and C#.
                Moreover, I am no stranger to Python and C.
              </p>
            </div>
          </section>
          <Console />
        </div>
        <div id="Projects">
          <h1>Projects</h1>
          <Project />
        </div>
        <div id="Contact">
          <h1>Contact Info</h1>
          <p>rahmanrajan4@gmail.com</p>
          <p>Cell: 8182887578</p>
          <hr />
          <p>
            Aside from coding, I have strong interest in music where I use FL
            Studio to make songs. Moreover I play basketball regularly on the
            weekends and Monday nights (We're looking for players!). Please
            don't hestitate to reach out to me, I always text/email back!
          </p>
        </div>
      </div>
    </Router>
  );
}

export default App;
