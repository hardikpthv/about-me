import React, { Component } from "react";

import "./App.css";
import Profile from "./components/profile/Profile";
import Social from "./components/social/Social";

class App extends Component {
  render() {
    return (
      <main role="main" className="main">
        <div className="container">
          <Profile />
          <Social />
        </div>
      </main>
    );
  }
}

export default App;
