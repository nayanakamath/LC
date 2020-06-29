import React, { Component } from 'react';
import Grid from "./ColorGame/Grid/Grid";
import ColorPickers from "./ColorGame/ColorPickers/ColorPickers";
import { Graph } from "./ColorGame/Graph";

const SIZE = 4;
const COLORS = ["orange", "red", "blue", "green", "yellow"];

export default class ColorGame extends Component {
    constructor(props) {
        super(props);
        this.incrementCount = this.incrementCount.bind(this);
        this.sliderInput = this.sliderInput.bind(this);
        this.restart = this.restart.bind(this);
        this.colorFill = this.colorFill.bind(this);
        this.state = {
          size: SIZE,
          graph: new Graph(SIZE),
          colors: COLORS,
          count: 0,
        };
      }
    
      incrementCount() {
        this.setState({
          count: this.state.count + 1,
        });
      }
    
      restart() {
        this.setState({
          graph: new Graph(this.state.size),
          count: 0,
        });
      }
    
      sliderInput(value) {
        this.setState({
          size: value,
          graph: this.newGrid(value, this.state.colors),
          count: 0,
        });
      }
    
      colorFill(color) {
        this.state.graph.colorFill(color);
      }
    
    render() {
        return (
            <div>
            <div
          style={{
            backgroundColor: "grey",
            color: "white",
            display: "inline-block",
            width: "400px",
            textAlign: "center",
            padding: "50px",
            margin: "10px",
            marginTop: "15px",
          }}
        >
          <div id="headerColorgame">
            <h1>Color Fun</h1>
            <br/>
            <div className="newgame" onClick={(e) => this.restart()}>
              New Game
            </div>
            <br/>
            <div className="count">
              Changes <span>{this.state.count}</span>
            </div>
          </div>
          <div>
            <ColorPickers
              colors={this.state.colors}
              clickHandler={this.colorFill}
              incrementCount={this.incrementCount}
            />
          </div>
          <Grid
            grid={this.state.graph}
            colors={this.state.colors}
            size={this.state.size}
          />
        </div>
            </div>
        )
    }
}
