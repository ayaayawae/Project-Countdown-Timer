import React, { Component } from "react";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import Grid from "@material-ui/core/Grid";

class Timer extends Component {
  state = {};
  render() {
    return (
      <Grid container direction="row" justify="center" alignItems="center">
        <div>
          <ArrowDropUpIcon
            fontSize="large"
            onClick={() => this.props.increment("h")}
          />
          <h3>
            {this.props.time.h >= 10
              ? this.props.time.h
              : "0" + this.props.time.h}
          </h3>
          <ArrowDropDownIcon
            fontSize="large"
            onClick={() => this.props.decrement("h")}
          />
        </div>
        <strong>:</strong>
        <div>
          <ArrowDropUpIcon
            fontSize="large"
            onClick={() => this.props.increment("m")}
          />
          <h3>
            {this.props.time.m >= 10
              ? this.props.time.m
              : "0" + this.props.time.m}
          </h3>
          <ArrowDropDownIcon
            fontSize="large"
            onClick={() => this.props.decrement("m")}
          />
        </div>
        <strong>:</strong>
        <div>
          <ArrowDropUpIcon
            fontSize="large"
            onClick={() => this.props.increment("s")}
          />
          <h3>
            {this.props.time.s >= 10
              ? this.props.time.s
              : "0" + this.props.time.s}
          </h3>
          <ArrowDropDownIcon
            fontSize="large"
            onClick={() => this.props.decrement("s")}
          />
        </div>
      </Grid>
    );
  }
}

export default Timer;
