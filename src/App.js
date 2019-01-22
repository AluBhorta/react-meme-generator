import React, { Component } from "react";
import logo from "./logo.svg";
import MemeGenerator from "./components/MemeGenerator";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Meme Generator</h2>
        </header>
        <MemeGenerator />
      </div>
    );
  }
}

export default App;
