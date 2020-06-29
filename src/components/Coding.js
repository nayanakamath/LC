import React, { Component } from "react";
import Accordion from "./Accordion";

export default class Coding extends Component {
  render() {
    return (
      <div className="App">
        <h1>Welcome to the coding section!</h1>
        <div style={{ backgroundColor: "violet", margin: "20px" }}>
          <Accordion title="   What is computer coding?">
            <iframe
              width="450"
              height="350"
              src="https://www.youtube.com/embed/THOEQ5soVpY"
              title="coding1"
            >
              >
            </iframe>
          </Accordion>
        </div>
        <div style={{ backgroundColor: "indigo", margin: "20px" }}>
          <Accordion title="   How does computer programs work?">
            <iframe
              width="450"
              height="350"
              src="https://www.youtube.com/embed/Nc31NAujTkA"
              title="coding2"
            >
              >
            </iframe>
          </Accordion>
        </div>
        <div style={{ backgroundColor: "blue", margin: "20px" }}>
          <Accordion
            className="accordion"
            title="    How to think like a computer?"
          >
            <iframe
              width="450"
              height="350"
              src="https://www.youtube.com/embed/xngWoocXYCo"
              title="coding3"
            >
              >
            </iframe>
          </Accordion>
        </div>
        <div style={{ backgroundColor: "green", margin: "20px" }}>
          <Accordion className="accordion" title="   What makes a good game?">
            <iframe
              width="450"
              height="350"
              src="https://www.youtube.com/embed/Cji2XXJaX9o"
              title="coding4"
            >
              >
            </iframe>
          </Accordion>
        </div>
        <div
          style={{ backgroundColor: "yellow", color: "black", margin: "20px" }}
        ></div>
      </div>
    );
  }
}
