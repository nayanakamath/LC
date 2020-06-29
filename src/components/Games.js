// import React, { Component } from "react";
// import Tic from "./TicTacToe/Game";
// import Grid from "./ColorGame/Grid/Grid";
// import ColorPickers from "./ColorGame/ColorPickers/ColorPickers";
// import { Graph } from "./ColorGame/Graph";
// import Main from "./MemoryGame/Main";
// import "/Users/nayanakamath/Desktop/vsWorkspace/lc-online/src/App.css";

// const SIZE = 4;
// const COLORS = ["blue", "red", "green", "yellow", "orange"];

// export default class Games extends Component {

//   constructor(props) {
//     super(props);
//     this.incrementCount = this.incrementCount.bind(this);
//     this.sliderInput = this.sliderInput.bind(this);
//     this.restart = this.restart.bind(this);
//     this.colorFill = this.colorFill.bind(this);
//     this.state = {
//       size: SIZE,
//       graph: new Graph(SIZE),
//       colors: COLORS,
//       count: 0,
//     };
//   }

//   incrementCount() {
//     this.setState({
//       count: this.state.count + 1,
//     });
//   }

//   restart() {
//     this.setState({
//       graph: new Graph(this.state.size),
//       count: 0,
//     });
//   }

//   sliderInput(value) {
//     this.setState({
//       size: value,
//       graph: this.newGrid(value, this.state.colors),
//       count: 0,
//     });
//   }

//   colorFill(color) {
//     this.state.graph.colorFill(color);
//   }

//   render() {
//     return (
//       <div className="App">
//         <h1 style={{ marginTop: "100px" }}>Welcome to the Games section!</h1>
//         <div
//           style={{
//             backgroundColor: "black",
//             color: "white",
//             display: "inline-block",
//             width: "400px",
//             textAlign: "center",
//             padding: "20px",
//             margin: "15px",
//             background: "#c00",
//             whiteSpace: "pre-wrap",
//           }}
//         >
//           <h1>Tic tac toe game</h1>
//           <Tic />
//         </div>
//         <br />
//         <div
//           style={{
//             backgroundColor: "pink",
//             color: "white",
//             textAlign: "center",
//             padding: "5px",
//             margin:"10px",
//           }}
//         >
//           <h1>Memory game</h1>
//           <Main  />
//         </div>

//         <div
//           style={{
//             backgroundColor: "grey",
//             color: "white",
//             display: "inline-block",
//             width: "400px",
//             textAlign: "center",
//             padding: "50px",
//             margin: "10px",
//             marginTop: "15px",
//           }}
//         >
//           <div id="headerColorgame">
//             <h1>Color Fun</h1>
//             <div className="newgame" onClick={(e) => this.restart()}>
//               New Game
//             </div>
//             <div className="count">
//               Changes <span>{this.state.count}</span>
//             </div>
//           </div>
//           {/*        <div className="sizeChanger">
//           <span className="size-value">{this.state.size}</span>
//           <input
//             type="range"
//             value={this.state.size}
//             min={MIN}
//             max={MAX}
//             step="1"
//             onChange={(e) => this.sliderInput(e.target.value)} />
//         </div>*/}
//           <div>
//             <ColorPickers
//               colors={this.state.colors}
//               clickHandler={this.colorFill}
//               incrementCount={this.incrementCount}
//             />
//           </div>
//           <Grid
//             grid={this.state.graph}
//             colors={this.state.colors}
//             size={this.state.size}
//           />
//         </div>
//       </div>
//     );
//   }
// }

import React, { Component } from "react";
import { Link } from "react-router-dom";
import "/Users/nayanakamath/Desktop/vsWorkspace/lc-online/src/App.css";

export default class Games extends Component {
  render() {
    return (
      <div className="App">
        <h1 style={{ marginTop: "100px" }}>Welcome to the Games section!</h1>

        <div>
          <Link to="/tic" style={{ textDecoration: "none", color: "red" }}>
            <h3>TicTacToe</h3>
          </Link>
        </div>

        <div>
          <Link to="/mem" style={{ textDecoration: "none", color: "red" }}>
            <h3>Memory Game</h3>
          </Link>
        </div>

        <div>
          <Link to="/col" style={{ textDecoration: "none", color: "red" }}>
            <h3>Color Game</h3>
          </Link>
        </div>
      </div>
    );
  }
}
