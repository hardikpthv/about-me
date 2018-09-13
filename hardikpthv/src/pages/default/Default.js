import React from "react";

import "./Default.css";
import Profile from "../../components/profile";
import Menu from "../../components/menu/";
import Social from "../../components/social/";

class Default extends React.Component {
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

export default Default;
