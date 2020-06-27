import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Quiz from "./components/Quiz";
import Header from "./components/Header";
import Riddles from "./components/Riddles";
import Patterns from "./components/Patterns";
import Games from "./components/Games";
import Crafts from "./components/Crafts";
import Coding from "./components/Coding";
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
          <Route path="/home" component={Home} />
          <Route path="/quiz" component={Quiz} />
          <Route path="/riddles" component={Riddles} />
          <Route path="/games" component={Games} />
          <Route path="/patterns" component={Patterns} />
          <Route path="/crafts" component={Crafts} />
          <Route path="/coding" component={Coding} />
  
        </div>
      </Router>
    </div>
  );
}

export default App;
