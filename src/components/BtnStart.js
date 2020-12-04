import { Button } from "@material-ui/core";
import React, { Component } from "react";

class BtnStart extends Component {
  state = {};
  render() {
    return (
      <div>
        {this.props.status === 0 ? (
          <Button variant="contained" onClick={this.props.start}>
            Start
          </Button>
        ) : (
          ""
        )}

        {this.props.status === 1 ? (
          <div>
            <Button variant="contained" onClick={this.props.pause}>
              Pause
            </Button>
            <Button
              color="secondary"
              variant="contained"
              onClick={this.props.reset}
            >
              Reset
            </Button>
          </div>
        ) : (
          ""
        )}

        {this.props.status === 2 ? (
          <div>
            <Button variant="contained" onClick={this.props.start}>
              Resume
            </Button>
            <Button
              color="secondary"
              variant="contained"
              onClick={this.props.reset}
            >
              Reset
            </Button>
          </div>
        ) : (
          ""
        )}

        {this.props.status === 3 ? (
          <div>
            <Button
              color="secondary"
              variant="contained"
              onClick={this.props.reset}
            >
              Reset
            </Button>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default BtnStart;
