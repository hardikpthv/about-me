import React, { Component } from "react";

import "./App.css";
import Profile from "./components/profile/Profile";
import Menu from "./components/menu/Menu";
import Social from "./components/social/Social";

class App extends Component {
  render() {
    return (
      <main role="main" className="main">
        <div className="container">
          <Profile />
          <Menu />
          <Social />
        </div>
      </main>
    );
  }
}

export default App;
