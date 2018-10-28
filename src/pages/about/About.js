import React from "react";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

class About extends React.Component {
  render() {
    return (
      <div>
        <Grid container spacing={16}>
          <Grid item xs={12} sm={6}>
            <Card>
              <CardContent>
                <Typography gutterBottom variant="subheading" component="h2">
                  I am a software engineer with more than 4 years of experience
                  in developing web apps. I am mainly working with ECMA Script
                  and other frontend frameworks such as Angular, NgRx, React
                  Native and middleware services mostly in Express and Spring
                  MVC. I got a fair chance to work with Polymer, PWAs and React
                  as well.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Card>
              <CardContent>
                <Typography gutterBottom variant="subheading" component="h2">
                  I love to contribute in every possible way to the communities
                  as I can. I speak in developer conferences, meetups, and
                  workshops, write, not regularly, answers on{" "}
                  <a href="https://www.quora.com/profile/Hardik-Pithva-1">
                    Quora
                  </a>
                  ,{" "}
                  <a href="https://stackoverflow.com/users/4790490/hearty">
                    StackOverflow
                  </a>
                  , and articles on{" "}
                  <a href="https://medium.com/@hardikpthv">Medium</a> and
                  contribute in OSS projects available at{" "}
                  <a href="https://github.com/pulls?page=2&q=is%3Apr+author%3Ahardikpthv+archived%3Afalse+is%3Aclosed">
                    Github
                  </a>
                  .
                </Typography>
                <br />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Card>
              <CardContent>
                <Typography variant="subheading" component="h2">
                  I work with media and entertainment clients from the US for
                  their B2B and B2C products. I am very much inquisitive about
                  making the code more readable, optimized and reusable, in
                  addition, commit messages/mentions, containers, and CI/CD. I
                  do also have a passion for creating great products/apps as
                  well as learn something newer and mentor the fellow workers
                  with tremendous zeal.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Card>
              <CardContent>
                <Typography variant="subheading" component="h2">
                  I did build a few products to gain experience in developing
                  and launching end to end, in my very early time most likely in
                  student life. It was an adequately better effort which helped
                  to understand user experience and expectations.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default About;
