import React, { Component } from "react";

import hardik from "./assets/hardikpthv.jpeg";
import "./App.css";
import Social from "./components/social/Social";

class App extends Component {
  render() {
    return (
      <main role="main" className="main">
        <div className="container">
          <img src={hardik} className="avatar" alt="avatar" />
          <h1>Hardik Pithva</h1>
          <Social />
        </div>
      </main>
    );
  }
}

export default App;
