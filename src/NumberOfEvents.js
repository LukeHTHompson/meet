// src/NumberOfEvents.js

// Main Imports
import React, { Component } from "react";
import { ErrorAlert } from './Alert';

// Components

class NumberOfEvents extends Component {

  state = {
    // // limit: 32,
    // limit: this.props.NumberofEvents ? this.props.NumberofEvents : 32,
    errorText: ''
  }

  componentDidMount() {
    this.mounted = true;
    this.props.updateNumberOfEvents(this.props.NumberofEvents)
  }

  handleLimitChanged = (event) => {
    const value = event.target.value;
    const lettersOrNegative = new RegExp(/^\d+$/)
    console.log(value);
    if (value.length > 0 && !lettersOrNegative.test(value)) {
      this.setState({
        errorText: 'Select a positive integer.'
      })
    } else {
      this.setState({
        // limit: value,
        errorText: ''
      });
    }
    // Update the state "NumberOfEvents" in <App />
    this.props.updateNumberOfEvents(value)
  }

  render() {
    return (
      <div>
        <ErrorAlert text={this.state.errorText} />
        <div>Number of Events: </div>
        <input
          type="text"
          value={this.props.NumberofEvents}
          className="limit"
          onChange={(e) => this.handleLimitChanged(e)}
        // onChange={(e) => this.props.updateNumberOfEvents(e.target.value)}
        />
      </div >
    );
  }
}

export default NumberOfEvents;