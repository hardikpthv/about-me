import React, { Component } from "react";
import { CardActions, Button } from "@material-ui/core";

export class CommonCardActions extends Component {
  render() {
    const { actionOne = {}, actionTwo = {} } = this.props;
    return (
      <CardActions>
        <Button
          size="medium"
          color="secondary"
          onClick={() => window.open(actionOne.url, "_blank")}
        >
          {actionOne.title}
        </Button>
        <Button
          size="medium"
          color="secondary"
          onClick={() => window.open(actionTwo.url, "_blank")}
        >
          {actionTwo.title}
        </Button>
      </CardActions>
    );
  }
}
