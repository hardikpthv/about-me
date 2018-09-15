import React from "react";
import PropTypes from "prop-types";

import { AppBar, IconButton, Toolbar, Typography } from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import { withStyles } from "@material-ui/core/styles";

import { URL } from "../../utils";
import GitHub from "../../assets/social/github.png";
import LinkedIn from "../../assets/social/linkedin.png";

const drawerWidth = 300;

const styles = theme => ({
  appBar: {
    position: "fixed",
    marginLeft: drawerWidth,
    [theme.breakpoints.up("md")]: {
      width: `calc(100% - ${drawerWidth}px)`
    }
  },
  navIconHide: {
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between"
  },
  rightButton: {
    marginRight: 5
  },
  rightButtonIcon: {
    width: 28
  }
});

class AppToolbar extends React.Component {
  render() {
    const { classes, title } = this.props;
    let tempTitle = `${title.charAt(1).toUpperCase()}${title.substr(2)}`;
    return (
      <AppBar className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            onClick={() => this.props.onMenuClick()}
            className={classes.navIconHide}
          >
            <Menu />
          </IconButton>
          <Typography variant="title" color="inherit" noWrap>
            {tempTitle}
          </Typography>
          <div>
            <IconButton
              className={classes.rightButton}
              onClick={() => window.open(URL.github, "_blank")}
            >
              <img
                src={GitHub}
                alt="GitHub"
                className={classes.rightButtonIcon}
              />
            </IconButton>
            <IconButton
              className={classes.rightButton}
              onClick={() => window.open(URL.linkedIn, "_blank")}
            >
              <img
                src={LinkedIn}
                alt="LinkedIn"
                className={classes.rightButtonIcon}
              />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    );
  }
}

AppToolbar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(AppToolbar);
