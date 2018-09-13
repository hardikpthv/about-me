import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Default from "./pages/default";
import Dashboard from "./pages/dashboard/";

import "./App.css";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Default} />
          <Route path="/speaking" component={Dashboard} />
          <Route path="/about" component={Dashboard} />
          <Route path="/blog" component={Dashboard} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
