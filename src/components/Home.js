import React from "react";
import Facts from "./Facts";
import { Link } from "react-router-dom";

class Home extends React.Component {
  render() {
    return (
      <div>
        <Facts />
        <div
          className="App-container App-container1"
        >
          <Link to="/quiz">Quiz</Link>
        </div>
        <div className="App-container App-container2">
          <Link to="/games">Games</Link>
        </div>
        <div className="App-container App-container3">
          <Link to="/patterns">Stickers</Link>
        </div>
        <div className="App-container App-container4">
          <Link to="/riddles">Riddles</Link>
        </div>
      </div>
    );
  }
}

export default Home;
