import React from "react";
import Facts from "./Facts";
import { Link } from "react-router-dom";
import "/Users/nayanakamath/Desktop/vsWorkspace/lc-online/src/App.css";

class Home extends React.Component {
  render() {
    return (
      <div>
      <img src={require("./images/logo.jpg")} id="logo-img" alt="logo" />

        <div className="App-container App-container1">
          <Link to="/quiz"> Quiz  </Link>
        </div>
        <div className="App-container App-container2">
          <Link to="/games">Games</Link>
        </div>
        <div className="App-container App-container3">
          <Link to="/stickers">Stickers</Link>
        </div>
        <div className="App-container App-container4">
          <Link to="/riddles">Riddles</Link>
        </div>
        <div className="App-container App-container5">
          <Link to="/crafts">Crafts</Link>
        </div>
        <div className="App-container App-container6">
          <Link to="/coding">Coding</Link>
        </div>
        <div >
        <Facts  />
        </div>
      </div>
    );
  }
}

export default Home;
