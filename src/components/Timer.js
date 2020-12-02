import React, { Component } from "react";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

class Timer extends Component {
  state = {};
  render() {
    return (
      <div>
        <div>
          <ArrowDropUpIcon fontSize="large" onClick={this.props.increment} />
          <h3>
            {this.props.time.h >= 10
              ? this.props.time.h
              : "0" + this.props.time.h}
          </h3>
          <ArrowDropDownIcon fontSize="large" />
        </div>

        <div>
          <ArrowDropUpIcon fontSize="large" />
          <h3>
            {this.props.time.m >= 10
              ? this.props.time.m
              : "0" + this.props.time.m}
          </h3>
          <ArrowDropDownIcon fontSize="large" />
        </div>

        <div>
          <ArrowDropUpIcon fontSize="large" />
          <h3>
            {this.props.time.s >= 10
              ? this.props.time.s
              : "0" + this.props.time.s}
          </h3>
          <ArrowDropDownIcon fontSize="large" />
        </div>
      </div>
    );
  }
}

export default Timer;
