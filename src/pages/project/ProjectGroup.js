import React, { Component } from "react";
import { Grid, Typography } from "@material-ui/core";

import { SmallCard, CommonCard } from "../../components/card";

const style = {
  groupContainer: {
    marginBottom: 30
  }
};

export class ProjectGroup extends Component {
  chooseCard = (type, project, title) => {
    let card;
    card =
      type === "small" ? (
        <SmallCard
          imageAlt={project.logoAlt}
          imageUrl={project.logo}
          title={project.name}
          description={project.description}
          action={{
            title: `VIEW ON ${title.toUpperCase()}`,
            url: project.url.demo
          }}
        />
      ) : (
        <CommonCard
          image={{
            url: project.logo,
            alt: project.logoAlt,
            height: 200
          }}
          title={project.name}
          description={project.description}
          actionOne={{ title: "DEMO", url: project.url.demo }}
          actionTwo={{ title: "SOURCE", url: project.url.source }}
          metadata={project.language}
        />
      );

    return card;
  };

  render() {
    const { title, type, projects = [] } = this.props;

    const card = projects.map((project, i) => (
      <Grid item xs={12} sm={6} key={i}>
        {this.chooseCard(type, project, title)}
      </Grid>
    ));

    return (
      <div style={{ ...style.groupContainer }}>
        <Typography gutterBottom variant="display1" component="h2">
          {title}
        </Typography>
        <Grid container spacing={32}>
          {card}
        </Grid>
      </div>
    );
  }
}
