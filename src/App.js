import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Quiz from "./components/Quiz";
import Header from "./components/Header";
import Riddles from "./components/Riddles";
import Stickers from "./components/Stickers";
import Games from "./components/Games";
import Crafts from "./components/Crafts";
import Coding from "./components/Coding";
import Tic from "./components/TicTacGame";
import Mem from "./components/MemoryGame";
import Col from "./components/ColorGame";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <div className="App-header">
          <Header />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/tic" component={Tic} />
          <Route path="/mem" component={Mem} />
          <Route path="/col" component={Col} />
          <Route path="/home" component={Home} />
          <Route path="/quiz" component={Quiz} />
          <Route path="/riddles" component={Riddles} />
          <Route path="/games" component={Games }/>
          <Route path="/stickers" component={Stickers} />
          <Route path="/crafts" component={Crafts} />
          <Route path="/coding" component={Coding} />
  
        </div>
      </Router>
    </div>
  );
}

export default App;
