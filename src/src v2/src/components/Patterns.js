import React, { Component } from "react";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

export default class Patterns extends Component {
  render() {
    return (
      <Carousel slidesPerPage={1} arrows infinite>
        <div className="App">
          <h1>Welcome to our sticker collection!</h1>
        </div>
        <img
          className="App-img"
          src={require("./images/blossom.jpg")}
          alt="blossom"
        />
        <img
          className="App-img"
          src={require("./images/cupcake.jpg")}
          alt="cupcake"
        />
        <img
          className="App-img"
          src={require("./images/girl.jpg")}
          alt="girl"
        />
        <img className="App-img" src={require("./images/cow.jpg")} alt="cow" />
        <img
          className="App-img"
          src={require("./images/crab.jpg")}
          alt="crab"
        />
        <img
          className="App-img"
          src={require("./images/doggy.jpg")}
          alt="doggy"
        />
        <img
          className="App-img"
          src={require("./images/kitty.jpg")}
          alt="kitty"
        />
        <img
          className="App-img"
          src={require("./images/horse.jpg")}
          alt="horse"
        />
        <img
          className="App-img"
          src={require("./images/yoda.jpg")}
          alt="yoda"
        />
        <img
          className="App-img"
          src={require("./images/hamster.jpg")}
          alt="hedghog"
        />
        <img
          className="App-img"
          src={require("./images/turtle.jpg")}
          alt="turtle"
        />
        <img
          className="App-img"
          src={require("./images/bunny.jpg")}
          alt="bunny"
        />
        <img
          className="App-img"
          src={require("./images/cryingKitty.jpg")}
          alt="cryingcat"
        />
        <img className="App-img" src={require("./images/cow.jpg")} alt="cow" />
      </Carousel>
    );
  }
}
