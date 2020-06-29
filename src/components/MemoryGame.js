import React, { Component } from "react";
import Main from "./MemoryGame/Main";

export default class MemoryGame extends Component {
  render() {
    return (
      <div>
        <div
          style={{
            backgroundColor: "pink",
            color: "white",
            textAlign: "center",
            padding: "5px",
            margin: "10px",
          }}
        >
          <h1>Memory game</h1>
          <Main />
        </div>
      </div>
    );
  }
}
