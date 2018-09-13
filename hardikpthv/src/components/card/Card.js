import React, { Component } from "react";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography
} from "@material-ui/core";

export default class CommonCard extends Component {
  render() {
    const {
      description,
      image,
      secondaryTitle,
      title,
      actionOne,
      actionTwo
    } = this.props;
    return (
      <Grid item xs={12} sm={6}>
        <Card>
          <CardActionArea>
            {image && (
              <CardMedia
                style={{ height: image.height }}
                image={image.url}
                title={image.alt}
              />
            )}
            <CardContent>
              <Typography gutterBottom variant="headline" component="h2">
                {title}
              </Typography>
              <Typography
                gutterBottom
                variant="subheading"
                color="textSecondary"
              >
                {secondaryTitle}
              </Typography>
              <Typography component="p">{description}</Typography>
            </CardContent>
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
      </Grid>
    );
  }
}
