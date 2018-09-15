import React, { Component } from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";
import { Grid, Typography, CardActions, Button } from "@material-ui/core";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Spinner from "../../components/spinner";

const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: "0 18px",
    [theme.breakpoints.between("xs", "sm")]: {
      padding: 0
    }
  },
  projectContainer: {
    marginBottom: 30
  },
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
});

class Project extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <div className={classes.projectContainer}>
          <Typography gutterBottom variant="display1" component="h2">
            VS Marketplace
          </Typography>
          <Grid container spacing={32}>
            <Grid item xs={12} sm={6}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.logo}
                  image="https://hardikpthv.gallerycdn.vsassets.io/extensions/hardikpthv/angularmaterial/6.0.0/1527321191402/Microsoft.VisualStudio.Services.Icons.Default"
                  title="Angular"
                />
                <div className={classes.details}>
                  <CardContent className={classes.content}>
                    <Typography variant="headline">Angular Material</Typography>
                    <Typography variant="subheading" color="textSecondary">
                      Angular Material with HTML snippets
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="medium" color="secondary">
                      VIEW ON MARKETPLACE
                    </Button>
                  </CardActions>
                </div>
              </Card>
            </Grid>
          </Grid>
        </div>
        <div className={classes.projectContainer}>
          <Typography gutterBottom variant="display1" component="h2">
            Google Play
          </Typography>
          <Grid container spacing={32}>
            <Grid item xs={12} sm={6}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.logo}
                  image="https://lh3.googleusercontent.com/vdnKvpGB-5Gu_18ZyimcyDr-TVR8fTrXPquw9DKtEydkOk0Wax8EhLu_8AwMyBluPA=s180-rw"
                  title="OnlineEDU"
                />
                <div className={classes.details}>
                  <CardContent className={classes.content}>
                    <Typography variant="headline">OnlineEDU</Typography>
                    <Typography variant="subheading" color="textSecondary">
                      OnlineEDU is specifically made for such people who want to
                      collect, learn and share.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="medium" color="secondary">
                      VIEW ON GOOLE PLAY
                    </Button>
                  </CardActions>
                </div>
              </Card>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

Project.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(Project);
