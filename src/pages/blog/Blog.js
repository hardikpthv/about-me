import React, { Component } from "react";
import PropTypes from "prop-types";

import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";

import Spinner from "../../components/spinner";
import Toastr from "../../components/toastr";
import { CommonCard } from "../../components/card";
import BlogService from "./BlogService";

const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: "0 18px",
    [theme.breakpoints.between("xs", "sm")]: {
      padding: 0
    }
  }
});

class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blogs: [],
      loading: true,
      toastr: {
        message: "",
        actionTitle: "",
        open: false
      }
    };
    this.blogService = new BlogService();
  }

  componentDidMount() {
    this.blogService
      .getBlogs()
      .then(blogs => this.setState({ blogs, loading: false }))
      .catch(err =>
        this.setState({
          loading: false,
          toastr: { message: err.message, open: true, action: "Rerty" }
        })
      );
  }

  componentWillUnmount() {
    //TODO: Cancel rest apis if pending
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
        <Grid container spacing={32}>
          {this.state.blogs.map((blog, i) => (
            <Grid item xs={12} sm={6} key={i}>
              <CommonCard
                image={{
                  url: blog.coverImage,
                  alt: blog.title,
                  height: 250
                }}
                title={blog.title}
                description={blog.subtitle}
                actionOne={{ title: "VIEW ARTICLE", url: blog.url }}
              />
            </Grid>
          ))}
        </Grid>
      </div>
    );
  }
}
Blog.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(Blog);
