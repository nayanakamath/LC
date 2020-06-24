import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import Quiz from "./components/Quiz";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Riddles from "./components/Riddles";
import Patterns from "./components/Patterns";
import Games from './components/Games'

function App() {
  return (
    <div>
      <Router>
        <div>
          <div className="App-header">
            <Header />
            <Route path="/about" component={About} />
            <Route path="/home" component={Home} />
            <Route path="/quiz" component={Quiz} />
            <Route path="/riddles" component={Riddles} />
            <Route path="/games" component={Games} />
            <Route path="/patterns" component={Patterns} />
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
