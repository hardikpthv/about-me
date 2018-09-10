import React, { Component } from "react";

import menuData from "./data";
import "./Menu.css";

export default class Menu extends Component {
  constructor() {
    super();
    this.data = menuData;
  }

  render() {
    return (
      <div className="menu">
        <ul className="list">
          {this.data.map((item, i) => (
            <li key={i}>
              <a href={item.href} target="_blank">
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
