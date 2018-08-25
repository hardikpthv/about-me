import React, { Component } from "react";

import hardik from "./../../assets/hardikpthv.png";
import "./Profile.css";

export default class Profile extends Component {
  render() {
    return (
      <div className="profile">
        <img src={hardik} className="avatar" alt="avatar" />
        <h1>Hardik Pithva</h1>
      </div>
    );
  }
}
