import React from "react";
import "./Console.css";

const Console = () => {
  return (
    <div className="Console">
      <div id="bar">
        {/* <div id="red"></div>
        <div id="yellow"></div>
        <div id="green"></div> */}
        <div className="colors">
          <div className="red"></div>
          <div className="red" style={{ backgroundColor: "yellow" }}></div>
          <div className="red" style={{ backgroundColor: "#1FC656" }}></div>
        </div>
      </div>
      <div id="screen">
        <p style={{ color: "white" }} className="font">
          Rajan@2020~$ start
        </p>
        <p style={{ color: "white" }} className="font">
          {" "}
          > Location
        </p>
        <p className="font">Los Angeles, California</p>
        <p style={{ color: "white" }} className="font">
          {" "}
          > Experience
        </p>
        <p className="font">Front End Intern @ FreeFlows LLC</p>
        <p className="font">
          Built landing page using React, Node, Firebase, Materials UI
        </p>
        <p className="font">Made custom audio player using React Hooks</p>
        <p className="font">Agile / Sprint enviornment, contributed in SEO</p>
        <p style={{ color: "white" }} className="font">
          {" "}
          > Education
        </p>
        <p className="font">UC Irvine, B.S. in Computer Science</p>
        <p style={{ color: "white" }} className="font">
          {" "}
          > Skills
        </p>
        <p className="font">
          React, Node, Express.js, MongoDB, C#, Python, SQL
        </p>
      </div>
    </div>
  );
};

export default Console;
