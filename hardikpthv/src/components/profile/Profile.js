import React, { Component } from "react";

import profileData from "./data";
import "./Profile.css";

export default class Profile extends Component {
  render() {
    return (
      <div className="profile">
        <img src={profileData.avatar} className="avatar" alt="avatar" />
        <h1>{profileData.name}</h1>
      </div>
    );
  }
}
