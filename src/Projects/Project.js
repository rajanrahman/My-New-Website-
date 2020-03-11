import React from "react";

import img1 from "../assets/StudiHomePage.JPG";
import img2 from "../assets/studiMob1.png";
import img3 from "../assets/studiMob2.PNG";
import img4 from "../assets/StudiMap.JPG";

import img5 from "../assets/BeatStyleHome.JPG";
import img6 from "../assets/beatStyle1.png";
import img7 from "../assets/beatStyle2.png";
import img8 from "../assets/beatStyle3.png";

import img9 from "../assets/LL1.JPG";
import img10 from "../assets/LL2.JPG";
import img11 from "../assets/LL3.JPG";
import img12 from "../assets/LL4.JPG";

import img13 from "../assets/FD1.JPG";
import img14 from "../assets/FD2.JPG";
import img15 from "../assets/FD3.JPG";

import "./Project1.css";

const Project = () => {
  return (
    <div className="Project">
      <h2>Studi</h2>
      <div className="Base-Img">
        <img src={img1} alt="Studi"></img>
      </div>
      <div className="Project-Mobile-Img-ctn">
        <img className="iphone-img" src={img2} alt="Studi"></img>
        <img className="ipad-img" src={img4} alt="Studi"></img>
        <img className="iphone-img" src={img3} alt="Studi"></img>
      </div>
      <div className="info">
        <p>
          This idea stemmed from the Co-Founder of Studi where he was at a cafe
          was trying to find somebody to study with. He told me about the idea
          of an app where people can find somebody to study with and I wanted to
          bring it to life. This is a just the FRONT END of the app where the
          BACK END will be developed using ASP.NET and MySQL.
        </p>
        <p>Current tech stack: React, Materials UI, Google Map API, Redux</p>
        <a href="https://epic-sammet-cb3122.netlify.com/">Click here to go!</a>
      </div>
      <h2>BeatStyle</h2>
      <div className="Base-Img">
        <img src={img5} alt="BeatStyle"></img>
      </div>
      <div className="Project-Mobile-Img-ctn">
        <img className="iphone-img" src={img6} alt="Studi"></img>
        <img className="iphone-img" src={img7} alt="Studi"></img>
        <img className="iphone-img" src={img8} alt="Studi"></img>
      </div>
      <div className="info">
        <p>
          During my time at FreeFlows LLC, I was tasked to re-create the entire
          web application using React as the UI framework. I was given a Figma
          mockup on how to design the application and had freedom in designing
          the Mobile viewing. I further contributed to adding a custom music
          player where mp3s are grabbed from our Firebase database. The web
          application has a portal for producers to log into (unavailable in
          demo link).
        </p>
        <p>Current tech stack: React, Materials UI, Node, Firebase</p>
        <a href="https://clever-pasteur-cf20e9.netlify.com/">
          Click here to go!
        </a>
      </div>
      <h2>Location Logger</h2>
      <div className="Base-Img">
        <img src={img12} alt="LL"></img>
      </div>
      <div
        style={{ justifyContent: "center", flexDirection: "column" }}
        className="Project-Mobile-Img-ctn"
      >
        <img className="ipad-img" src={img9} alt="Studi"></img>
        <img className="ipad-img" src={img10} alt="Studi"></img>
        <img className="ipad-img" src={img11} alt="Studi"></img>
      </div>
      <div className="info">
        <p>
          This is a full stack SPA application where users can log in/sign up,
          log their locations and a picture, and view other users’ locations as
          well. Using the Google Maps API, users can view the location on Google
          Maps. Relevant concepts include custom React Hooks, React Router Dom,
          React Context API, useReducer (Redux replacement), JWT for
          authorization and authentication in localStorage. Due to the nature of
          using the free tier of Heroku, images are not stored.
        </p>
        <p>
          Current tech stack: React, Node, Express.js, MongoDB, Mongoose, Google
          API
        </p>
        <a href="https://rajlocationlogger.herokuapp.com/">Click here to go!</a>
      </div>
      <h2>Face Detection Application</h2>
      <div className="Base-Img">
        <img src={img13} alt="Face Detection"></img>
      </div>
      <div
        style={{ justifyContent: "center", flexDirection: "column" }}
        className="Project-Mobile-Img-ctn"
      >
        <img className="ipad-img" src={img14} alt="Studi"></img>
        <img className="ipad-img" src={img15} alt="Studi"></img>
      </div>
      <div className="info">
        <p>
          Using the Clarifai API for face detection, this web application allows
          the user to upload a picture of someone and the app will draw a square
          indicating the face. The API gives me cooridnates which I used CSS to
          draw a retangle around the person's face. Go ahead and find a image
          link online to test out the app!
        </p>
        <p>Current tech stack: React, Clarifai API</p>
        <a href="https://sleepy-bhaskara-85c2e4.netlify.com/">
          Click here to go!
        </a>
      </div>
    </div>
  );
};

export default Project;
