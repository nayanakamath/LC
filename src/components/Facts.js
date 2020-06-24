import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default class Facts extends Component {
  render() {
    return (
      <Carousel className="App-carousal" arrows infinite>
        <p>A shark is the only known fish that can blink with both eyes.</p>

        <p>An ostrich's eye is bigger than its brain.</p>

        <p>
          It is impossible for most people to lick their own elbow. (try it!)
        </p>

        <p>The opposite sides of a dice always add up to seven.</p>

        <p>Number four is the only number with four digits.</p>

        <p>Tomatoes and avocadoes are actually fruits, not vegetables.</p>
      </Carousel>
    );
  }
}
