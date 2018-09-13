import React, { Component } from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";

import CommonCard from "../../components/card";
import Spinner from "../../components/spinner";
import SpeakingService from "./SpeakingService";

const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: "0 18px",
    [theme.breakpoints.between("xs", "sm")]: {
      padding: 0
    }
  },
  eventContainer: {
    marginBottom: 30
  },
  event: {
    marginTop: 10
  }
});

const MEDIA_URL = "https://raw.githubusercontent.com/hardikpthv/about/master/assets/";

class Speaking extends Component {
  constructor(props) {
    super(props);
    this.speakingService = new SpeakingService();
    this.state = {
      events: { next: [], past: [] },
      loading: true
    };
  }

  componentDidMount() {
    this.speakingService
      .getEvents()
      .then(events => {
        this.setState({ events, loading: false });
      })
      .catch(err => this.setState({ loading: false }));
  }

  getEvents() {}

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        {this.state.loading && <Spinner />}
        <div className={classes.eventContainer}>
          <Typography gutterBottom variant="display1" component="h2">
            Upcoming Events
          </Typography>
          <Grid container spacing={32} className={classes.event}>
            {this.state.events.next &&
              this.state.events.next.map((event, i) => (
                <CommonCard
                  key={i}
                  title={event.title}
                  secondaryTitle={event.type}
                  description={event.description}
                />
              ))}
          </Grid>
        </div>
        <div className={classes.event}>
          <Typography gutterBottom variant="display1" component="h2">
            Past Events
          </Typography>
          <Grid container spacing={32} className={classes.event}>
            {this.state.events.past &&
              this.state.events.past.map((event, i) => (
                <CommonCard
                  key={i}
                  image={{
                    url: `${MEDIA_URL}/${event.coverImage}`,
                    alt: event.coverImageAlt,
                    height: 250
                  }}
                  title={event.title}
                  secondaryTitle={event.type}
                  description={event.description}
                  actionOne={{ title: "DETAILS", url: event.meetupUrl }}
                  actionTwo={{ title: "VIEW SLIDES", url: event.slidesUrl }}
                />
              ))}
          </Grid>
        </div>
      </div>
    );
  }
}

Speaking.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Speaking);
