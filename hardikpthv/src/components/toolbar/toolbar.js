import React from "react";
import PropTypes from "prop-types";

import { AppBar, IconButton, Toolbar, Typography } from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import { withStyles } from "@material-ui/core/styles";

const drawerWidth = 240;

const styles = theme => ({
  appBar: {
    position: "absolute",
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
  toolbar: theme.mixins.toolbar
});

class AppToolbar extends React.Component {
  render() {
    const { classes, title } = this.props;
    let tempTitle = `${title.charAt(1).toUpperCase()}${title.substr(2)}`;
    return (
      <AppBar className={classes.appBar}>
        <Toolbar>
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
        </Toolbar>
      </AppBar>
    );
  }
}

AppToolbar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(AppToolbar);
