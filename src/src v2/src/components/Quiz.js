import React, { Component } from "react";
import Accordion from "./Accordion";

export default class Quiz extends Component {
  render() {
    return (
      <div className="App">
        <h1>Welcome to the quiz section!</h1>
        <div style={{ backgroundColor: "violet", margin: "20px" }}>
          <Accordion title="  What is the color of emerald?">Green</Accordion>
        </div>
        <div style={{ backgroundColor: "indigo", margin: "20px" }}>
          <Accordion title="  What colors are the stars in the American flag?">
            White
          </Accordion>
        </div>
        <div style={{ backgroundColor: "blue", margin: "20px" }}>
          <Accordion className="accordion" title="   Capital of India??">
            New Delhi
          </Accordion>
        </div>
        <div style={{ backgroundColor: "green", margin: "20px" }}>
          <Accordion
            className="accordion"
            title="  Where does Santa Claus live?"
          >
            North Pole
          </Accordion>
        </div>
        <div
          style={{ backgroundColor: "yellow", color: "black", margin: "20px" }}
        >
          <Accordion
            className="accordion"
            title="     Where is the Great Pyramid of Giza?"
          >
            Egypt
          </Accordion>
        </div>
        <div style={{ backgroundColor: "orange", margin: "20px" }}>
          <Accordion
            className="accordion"
            title="    How many days are in a year??"
          >
            365
          </Accordion>
        </div>
        <div style={{ backgroundColor: "red", margin: "20px" }}>
          <Accordion
            className="accordion"
            title="     Who was the first man to step on the moon??"
          >
            Neil Armstrong
          </Accordion>
        </div>
      </div>
    );
  }
}
