import React, { Component } from "react";

class Alert extends Component {
  constructor(props) {
    super(props);
    this.color = null;
    this.type = null;
  }

  getStyle = () => {
    return {
      color: this.color,
    };
  }

  getType = () => {
    return {
      type: this.type,
    };
  }

  render() {
    return (
      <div className={this.getType().type}>
        <div style={this.getStyle()}>{this.props.text}</div>
      </div>
    );
  }
}

class InfoAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = "blue";
    this.type = "infoAlert"
  }
}

// class WarningAlert extends Alert {
//   constructor(props) {
//     super(props);
//     this.color = "orange";
//   }

class ErrorAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = "red";
    this.type = "errorAlert";
  }
}

export {
  InfoAlert
  // ,WarningAlert
  , ErrorAlert
};