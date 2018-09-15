import React from "react";
import PropTypes from "prop-types";
import { Switch, Route } from "react-router-dom";

import CssBaseline from "@material-ui/core/CssBaseline";
import {
  MuiThemeProvider,
  createMuiTheme,
  withStyles
} from "@material-ui/core/styles";

import AppToolbar from "../../components/toolbar";
import SideNav from "../../components/sidenav";
import Speaking from "../speaking";
import About from "../about";
import Blog from "../blog";
import Project from "../project";

const theme = createMuiTheme({
  palette: {
    primary: { main: "#396AFC" },
    secondary: { main: "#EA526F" }
  }
});

const styles = theme => ({
  root: {
    flexGrow: 1,
    zIndex: 1,
    overflowX: "hidden",
    position: "relative",
    display: "flex",
    width: "100%",
    backgroundColor: "#FAFAFA"
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    height: "100vh",
    [theme.breakpoints.up("md")]: {
      marginLeft: 300
    }
  }
});

class Dashboard extends React.Component {
  state = {
    mobileOpen: false
  };

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  componentDidMount() {
    // window.twttr.widgets.load();
  }

  render() {
    const { classes, location } = this.props;

    return (
      <React.Fragment>
        <CssBaseline />
        <MuiThemeProvider theme={theme}>
          <div className={classes.root}>
            <AppToolbar
              onMenuClick={this.handleDrawerToggle}
              title={location.pathname}
            />
            <SideNav
              open={this.state.mobileOpen}
              onClose={this.handleDrawerToggle}
            />
            <main className={classes.content}>
              <div className={classes.toolbar} />
              <Switch>
                <Route path="/about" component={About} />
                <Route path="/speaking" component={Speaking} />
                <Route path="/blogs" component={Blog} />
                <Route path="/projects" component={Project} />
              </Switch>
            </main>
          </div>
        </MuiThemeProvider>
      </React.Fragment>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(Dashboard);
