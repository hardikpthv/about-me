import React, { Component } from "react";

import "./Profile.css";

export default class Profile extends Component {
  render() {
    const { size = 230, onlyPhoto } = this.props;
    return (
      <div className="profile">
        <img
          src={`https://www.gravatar.com/avatar/faa72ce4fa009d7435bd8cc5734b393f?s=${size}`}
          className="avatar"
          alt="avatar"
        />
        {!onlyPhoto && <h1>Hardik Pithva</h1>}
      </div>
    );
  }
}
