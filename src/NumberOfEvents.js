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
  }

  render() {
    return (
      <input
        type="text"
        value={this.state.limit}
        className="limit"
        onChange={this.handleLimitChanged}
      />
    );
  }
}

export default NumberOfEvents;