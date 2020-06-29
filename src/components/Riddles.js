import React, { Component } from "react";
import Accordion from "./Accordion";

export default class Riddles extends Component {
  render() {
    return (
      <div className="App">
        <h1>Welcome to the riddles section!</h1>
        <div style={{ backgroundColor: "violet",margin:"20px" }}>
          <Accordion title="What is really easy to get into, and hard to get out of?">
            Trouble
          </Accordion>
        </div>
        <div style={{ backgroundColor: "indigo",margin:"20px"  }}>
          <Accordion title="What word contains 26 letters, but only three syllables?">
            Alphabet
          </Accordion>
        </div>
        <div style={{ backgroundColor: "blue",margin:"20px"  }}>
          <Accordion
            className="accordion"
            title="I have lots of eyes, but can't see, who am I?"
          >
            Potato
          </Accordion>
        </div>
        <div style={{ backgroundColor: "green",margin:"20px"  }}>
          <Accordion
            className="accordion"
            title="Which is heavier: a ton of bricks or a ton of feathers?"
          >
            Both are same weight
          </Accordion>
        </div>
        <div style={{ backgroundColor: "yellow", color: "black" ,margin:"20px" }}>
          <Accordion
            className="accordion"
            title="What has hands, but can't clap?"
          >
            Clock
          </Accordion>
        </div>
        <div style={{ backgroundColor: "orange" ,margin:"20px" }}>
          <Accordion
            className="accordion"
            title="What can you catch, but can't throw?"
          >
            A cold
          </Accordion>
        </div>
        <div style={{ backgroundColor: "red" ,margin:"20px" }}>
          <Accordion
            className="accordion"
            title="Which band never plays music?"
          >
            Rubber band
          </Accordion>
        </div>
      </div>
    );
  }
}
