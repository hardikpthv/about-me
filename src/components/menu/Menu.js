import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Menu.css";

export default class Menu extends Component {
  render() {
    return (
      <div className="menu">
        <ul className="list">
          <li>
            <Link to="/about">Explore</Link>
          </li>
        </ul>
      </div>
    );
  }
}
