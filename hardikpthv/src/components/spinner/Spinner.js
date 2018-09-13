import React from "react";

import { CircularProgress } from "@material-ui/core";

const styles = {
  display: "flex",
  justifyContent: "center"
};

class Spinner extends React.Component {
  render() {
    return (
      <div style={styles}>
        <CircularProgress color="secondary" />
      </div>
    );
  }
}

export default Spinner;
