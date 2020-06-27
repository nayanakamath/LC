import React, { Component } from "react";
import Game from "./TicTacToe/Game";

export default class Games extends Component {
  render() {
    return (
      <div
        style={{
          backgroundColor: "black",
          color: "white",
          display: "inline-block",
          width: "400px",
          textAlign: "center",
          padding: "50px"
        }}
      >
        <p>Tic tac toe game</p>
        <Game />
      </div>
    );
  }
}
