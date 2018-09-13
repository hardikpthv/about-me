import React from "react";

import { Button, Snackbar } from "@material-ui/core";

const styles = {
  display: "flex",
  justifyContent: "center"
};

export default class Toastr extends React.Component {
  render() {
    const { message, action, open } = this.props;
    return (
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left"
        }}
        open={open}
        autoHideDuration={6000}
        onClose={this.handleClose}
        ContentProps={{
          "aria-describedby": "message-id"
        }}
        message={<span id="message-id">{message}</span>}
        action={[
          <Button
            key="undo"
            color="secondary"
            size="small"
            onClick={() => this.props.onActionClick()}
          >
            {action}
          </Button>
        ]}
      />
    );
  }
}
