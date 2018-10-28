import React, { Component } from "react";

import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";

import { CommonCardContent } from "./CardContent";

const style = {
  card: {
    display: "flex"
  },
  logo: {
    flex: "0 0 151px"
  },
  details: {
    display: "flex",
    flexDirection: "column"
  },
  content: {
    flex: "1 0 auto"
  }
};

export class SmallCard extends Component {
  render() {
    const { imageUrl, imageAlt, title, description, action } = this.props;
    return (
      <Card style={{ ...style.card }}>
        <CardMedia
          style={{ ...style.logo }}
          image={imageUrl}
          title={imageAlt}
        />
        <div className={style.details}>
          <CommonCardContent title={title} shortDesc={description} />
          <CardActions>
            <Button
              size="medium"
              color="secondary"
              onClick={() => window.open(action.url, "_blank")}
            >
              {action.title}
            </Button>
          </CardActions>
        </div>
      </Card>
    );
  }
}
