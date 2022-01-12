// src/NumberOfEvents.js

// Main Imports
import React, { Component } from "react";

// Components

class NumberOfEvents extends Component {

  state = {
    limit: 32
  }

  handleLimitChanged = (event) => {
    const value = event.target.value;
    this.setState({
      limit: value
    });
    // Update the state "NumberOfEvents" in <App />
    this.props.updateNumberOfEvents(value)
  }

  render() {
    return (
      <input
        type="text"
        value={this.props.NumberofEvents ? this.props.NumberOfEvents : this.state.limit}
        className="limit"
        onChange={(e) => this.props.updateNumberOfEvents(e.target.value)}
      />
    );
  }
}

export default NumberOfEvents;