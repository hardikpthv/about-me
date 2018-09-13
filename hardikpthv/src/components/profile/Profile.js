import React, { Component } from "react";

import "./Profile.css";

export default class Profile extends Component {
  render() {
    return (
      <div className="profile">
        <img
          src="https://www.gravatar.com/avatar/faa72ce4fa009d7435bd8cc5734b393f?s=460"
          className="avatar"
          alt="avatar"
        />
        <h1>Hardik Pithva</h1>
      </div>
    );
  }
}
