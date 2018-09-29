import React, { Component } from "react";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardMedia
} from "@material-ui/core";

import "./Card.css";
import { CommonCardContent } from "./CardContent";

export class CommonCard extends Component {
  render() {
    const {
      description,
      image,
      secondaryTitle,
      title,
      actionOne,
      actionTwo,
      metadata
    } = this.props;
    console.log(metadata);
    return (
      <Card>
        <CardActionArea>
          {image && (
            <CardMedia
              style={{ height: image.height }}
              image={image.url}
              title={image.alt}
            />
          )}
          <CommonCardContent
            title={title}
            shortDesc={secondaryTitle}
            description={description}
          />
          {metadata && (
            <div className="metadata">
              <img src={metadata.primary.icon} alt={metadata.primary.name} />
              <img
                src={metadata.secondary.icon}
                alt={metadata.secondary.name}
              />
            </div>
          )}
        </CardActionArea>
        {actionOne && (
          <CardActions>
            <Button
              size="medium"
              color="secondary"
              onClick={() => window.open(actionOne.url, "_blank")}
            >
              {actionOne.title}
            </Button>
            {actionTwo && (
              <Button
                size="medium"
                color="secondary"
                onClick={() => window.open(actionTwo.url, "_blank")}
              >
                {actionTwo.title}
              </Button>
            )}
          </CardActions>
        )}
      </Card>
    );
  }
}
