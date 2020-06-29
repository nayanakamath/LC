import React, { Component } from 'react';
import Tic from "./TicTacToe/Game";

export default class TicTacGame extends Component {
    render() {
        return (
            <div>
            <div
          style={{
            backgroundColor: "black",
            color: "white",
            display: "inline-block",
            width: "400px",
            textAlign: "center",
            padding: "20px",
            margin: "15px",
            background: "#c00",
            whiteSpace: "pre-wrap",
          }}
        >
          <h1>Tic tac toe game</h1>
          <Tic />
        </div>
            </div>
        )
    }
}
