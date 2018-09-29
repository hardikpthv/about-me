import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  AccountCircle,
  EventNote,
  Home,
  SpeakerNotes,
  Work
} from "@material-ui/icons";
import {
  Drawer,
  Divider,
  Hidden,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

import Profile from "../profile";

const data = [
  {
    icon: <Home />,
    text: "Home",
    href: "/"
  },
/*   {
    icon: <AccountCircle />,
    text: "About",
    href: "/about"
  }, */
  {
    icon: <EventNote />,
    text: "Speaking",
    href: "/speaking"
  },
  {
    icon: <SpeakerNotes />,
    text: "Blogs",
    href: "/blogs"
  },
  {
    icon: <Work />,
    text: "Projects",
    href: "/projects"
  }
];

const drawerWidth = 300;

const styles = theme => ({
  user: {
    display: "flex",
    alignItems: "center",
    flexFlow: "column wrap",
    padding: 24
  },
  username: {
    marginTop: 10
  },
  drawerPaper: {
    height: "100vh",
    width: drawerWidth,
    [theme.breakpoints.up("md")]: {
      position: "fixed"
    }
  }
});

class SideNav extends Component {
  render() {
    const { classes, open } = this.props;

    const drawer = (
      <div>
        <div className={classes.user}>
          <Profile size="150" onlyPhoto />
          <Typography
            className={classes.username}
            gutterBottom
            variant="headline"
            component="h2"
          >
            Hardik Pithva
          </Typography>
          <a
            href="https://twitter.com/hardikpthv?ref_src=twsrc%5Etfw"
            className="twitter-follow-button"
            data-show-count="false"
          >
            Follow @hardikpthv
          </a>
        </div>
        <Divider />
        <List component="nav">
          {data.map((item, i) => (
            <ListItem button key={i} component={Link} to={item.href}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </div>
    );

    return (
      <div>
        <Hidden mdUp>
          <Drawer
            variant="temporary"
            anchor="left"
            open={open}
            onClose={() => this.props.onClose()}
            classes={{
              paper: classes.drawerPaper
            }}
            ModalProps={{
              keepMounted: true // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden smDown implementation="css">
          <Drawer
            variant="permanent"
            open
            elevation={16}
            classes={{
              paper: classes.drawerPaper
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
      </div>
    );
  }
}

SideNav.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(SideNav);
