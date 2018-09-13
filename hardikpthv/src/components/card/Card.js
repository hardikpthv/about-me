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
    const { description, image, secondaryTitle, title, action } = this.props;
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
          {action && (
            <CardActions>
              <Button
                size="small"
                color="primary"
                onClick={() => window.open(action.url, "_blank")}
              >
                {action.title}
              </Button>
            </CardActions>
          )}
        </Card>
      </Grid>
    );
  }
}
