import React, { Component } from "react";
import Accordion from "./Accordion";

export default class Crafts extends Component {
  render() {
    return (
      <div
        className="App"
      >
        <h1>Welcome to the art & crafts section!</h1>
        <div style={{ backgroundColor: "violet", margin: "20px" }}>
          <Accordion title=" DIY playhouses">
            <iframe
              width="450"
              height="350"
              src="https://www.youtube.com/embed/HIQo1vELORs"
              title="craft1"
            ></iframe>
          </Accordion>
        </div>
        <div style={{ backgroundColor: "indigo", margin: "20px" }}>
          <Accordion title=" Fun Science experiments">
            <iframe
              width="450"
              height="350"
              src="https://www.youtube.com/embed/wwOY6RgrDKQ"
              title="craft2"
            ></iframe>
          </Accordion>
        </div>
        <div style={{ backgroundColor: "blue", margin: "20px" }}>
          <Accordion className="accordion" title=" Art tips and tricks">
            <iframe
              width="450"
              height="350"
              src="https://www.youtube.com/embed/iTvpxA15RzI"
              title="craft3"
            ></iframe>
          </Accordion>
        </div>
        <div style={{ backgroundColor: "green", margin: "20px" }}>
          <Accordion className="accordion" title=" Drawing ideas">
            <iframe
              width="450"
              height="350"
              src="https://www.youtube.com/embed/xSsdnC896pU"
              title="craft4"
            ></iframe>
          </Accordion>
        </div>
        <div
          style={{ backgroundColor: "yellow", color: "black", margin: "20px" }}
        >
          <Accordion className="accordion" title=" DIY toys">
            <iframe
              width="450"
              height="350"
              src="https://www.youtube.com/embed/M3KfZJ2LEOk"
              title="craft5"
            ></iframe>
          </Accordion>
        </div>
        <div style={{ backgroundColor: "orange", margin: "20px" }}>
          <Accordion className="accordion" title=" DIY organizers">
            <iframe
              width="450"
              height="350"
              src="https://www.youtube.com/embed/bNpBLrL31Ic"
              title="craft6"
            ></iframe>
          </Accordion>
        </div>
        <div style={{ backgroundColor: "red", margin: "20px" }}>
          <Accordion className="accordion" title="Paper craft">
            <iframe
              width="450"
              height="350"
              src="https://www.youtube.com/embed/Q9805Hrf8Vg"
              title="craft7"
            ></iframe>
          </Accordion>
        </div>
      </div>
    );
  }
}
