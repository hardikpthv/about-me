import React, { Component } from "react";
import { CardContent, Typography } from "@material-ui/core";

export class CommonCardContent extends Component {
  render() {
    const { title, shortDesc, description } = this.props;

    return (
      <CardContent>
        <Typography variant="headline">{title}</Typography>
        <Typography variant="subheading" color="textSecondary">
          {shortDesc}
        </Typography>
        <Typography component="p">{description}</Typography>
      </CardContent>
    );
  }
}
