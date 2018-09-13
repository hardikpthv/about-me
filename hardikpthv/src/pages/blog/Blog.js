import React, { Component } from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

import Spinner from "../../components/spinner";
import CommonCard from "../../components/card";
import BlogService from "./BlogService";

const styles = theme => ({
  root: {
    flexGrow: 1,
    paddingLeft: 18,
    paddingRight: 18
  }
});

class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blogs: [],
      loading: true
    };
    this.blogService = new BlogService();
  }

  componentDidMount() {
    this.blogService
      .getBlogs()
      .then(blogs => this.setState({ blogs, loading: false }))
      .catch(err => this.setState({ loading: false }));
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        {this.state.loading && <Spinner />}
        <Grid container spacing={32}>
          {this.state.blogs.map((blog, i) => (
            <CommonCard
              key={i}
              image={{
                url: blog.coverImage,
                alt: blog.title,
                height: 200
              }}
              title={blog.title}
              description={blog.subtitle}
              actionOne={{ title: "VIEW ARTICLE", url: blog.url }}
            />
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
