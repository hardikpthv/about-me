import React, { Component } from "react";

import socialData from "./data";
import "./Social.css";

class Social extends Component {
  constructor() {
    super();
    this.list = socialData;
  }

  render() {
    return (
      <div className="social">
        <ul className="list">
          {this.list.map((item, i) => (
            <li className="list-item" key={i}>
              <a href={item.href} target="_blank">
                <img
                  style={{ width: item.title === "LinkedIn" ? "48px" : "44px" }}
                  className={item.class}
                  src={item.logo}
                  alt={item.title}
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Social;
