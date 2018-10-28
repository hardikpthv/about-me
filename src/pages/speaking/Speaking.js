import React, { Component } from "react";
import PropTypes from "prop-types";

import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import { CommonCard } from "../../components/card";
import Spinner from "../../components/spinner";
import Toastr from "../../components/toastr";
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
    marginBottom: 35
  }
});

class Speaking extends Component {
  constructor(props) {
    super(props);
    this.speakingService = new SpeakingService();
    this.state = {
      events: { next: [], past: [] },
      loading: true,
      toastr: {
        message: "",
        actionTitle: "",
        open: false
      }
    };
  }

  componentDidMount() {
    this.speakingService
      .getEvents()
      .then(events => {
        this.setState({ events, loading: false });
      })
      .catch(err =>
        this.setState({
          loading: false,
          toastr: { message: err.message, open: true, action: "Rerty" }
        })
      );
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Toastr
          open={this.state.toastr.open}
          action={this.state.toastr.action}
          message={this.state.toastr.message}
          onActionClick={() => window.location.reload()}
        />
        {this.state.loading && <Spinner />}
        <div className={classes.eventContainer}>
          <Typography gutterBottom variant="display1" component="h2">
            Upcoming talks
          </Typography>
          <Grid container spacing={32}>
            {this.state.events.next &&
              this.state.events.next.map((event, i) => (
                <Grid item xs={12} sm={6} key={i}>
                  <CommonCard
                    title={event.title}
                    secondaryTitle={event.type}
                    description={event.description}
                  />
                </Grid>
              ))}
          </Grid>
        </div>
        <div className={classes.eventContainer}>
          <Typography gutterBottom variant="display1" component="h2">
            Past talks
          </Typography>
          <Grid container spacing={32}>
            {this.state.events.past &&
              this.state.events.past.map((event, i) => (
                <Grid item xs={12} sm={6} key={i}>
                  <CommonCard
                    image={{
                      url: event.coverImage,
                      alt: event.coverImageAlt,
                      height: 250
                    }}
                    title={event.title}
                    secondaryTitle={event.type}
                    description={event.description}
                    actionOne={{ title: "DETAILS", url: event.meetupUrl }}
                    actionTwo={{ title: "VIEW SLIDES", url: event.slidesUrl }}
                  />
                </Grid>
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
