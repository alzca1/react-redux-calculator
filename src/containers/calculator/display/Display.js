import React, { Component } from "react";
import ScalingText from "./scalingtext/ScalingText";
import { connect } from "react-redux";
import "./Display.css";

class Display extends Component {
  render() {
    return (
      <div className="Display">
        <ScalingText value={this.props.reduxValue} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    state: state,
    reduxValue: state.displayValue,
  };
};

export default connect(mapStateToProps)(Display);
