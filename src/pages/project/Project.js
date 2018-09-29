import React, { Component } from "react";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import { ProjectGroup } from "./ProjectGroup";
import Spinner from "../../components/spinner";
import ProjectService from "./ProjectService";

//TODO: make iy reusable
const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: "0 18px",
    [theme.breakpoints.between("xs", "sm")]: {
      padding: 0
    }
  }
});

class Project extends Component {
  constructor(props) {
    super(props);
    this.projectService = new ProjectService();
    this.state = {
      projects: {},
      loading: true
    };
  }

  componentDidMount() {
    this.projectService
      .getProjects()
      .then(projects => {
        this.setState({ projects, loading: false });
      })
      .catch(err => this.setState({ loading: false }));
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        {this.state.loading && <Spinner />}
        <ProjectGroup
          title="VS Marketplace"
          projects={this.state.projects.vscode}
          type="small"
        />
        <ProjectGroup title="Github" projects={this.state.projects.github} />
        <ProjectGroup
          title="Google Play"
          projects={this.state.projects.googlePlay}
          type="small"
        />
      </div>
    );
  }
}

Project.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(Project);
