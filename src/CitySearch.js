// src/CitySearch.js

// Main Imports
import React, { Component } from "react";
import ReactDOM from 'react-dom'
import { ErrorAlert, InfoAlert } from './Alert';
// import NumberOfEvents from "./NumberOfEvents";

class CitySearch extends Component {

  state = {
    query: "",
    suggestions: [],
    showSuggestions: undefined,
    infoText: ''
  }

  handleInputChanged = (event) => {
    const value = event.target.value;
    const suggestions = this.props.locations.filter((location) => {
      return location.toUpperCase().indexOf(value.toUpperCase()) > -1;
    });
    if (suggestions.length === 0) {
      this.setState({
        query: value,
        suggestions,
        infoText: 'We cannot find the city you are looking for. Please try again.'
      })
    } else {
      return this.setState({
        query: value,
        suggestions,
        infoText: ''
      });
    }
  }

  handleItemClicked = (suggestion, NumberOfEvents) => {
    this.setState({
      query: suggestion,
      suggestions: [],
      showSuggestions: false,
      infoText: ''
    });

    // Update the state "events" in <App />
    this.props.updateEvents(suggestion, NumberOfEvents);
  }

  // Need a way to make sure that "See All Cities" and other suggestions do not appear at launch
  render() {
    return (
      <div className="CitySearch">
        <InfoAlert text={this.state.infoText} />
        <div>City to Search:</div>
        <input
          type="text"
          className="city"
          value={this.state.query}
          onChange={this.handleInputChanged}
          onFocus={() => { this.setState({ showSuggestions: true }) }}
        />
        <ul className={this.state.showSuggestions ? "suggestions" : "suggestions hidden"}>
          {this.state.suggestions.map((suggestion) => (
            <li
              key={suggestion}
              onClick={() => this.handleItemClicked(suggestion, this.props.NumberOfEvents)}
            >
              {suggestion}
            </li>
          ))}
          <li key="all" onClick={() => this.handleItemClicked("all", this.props.NumberOfEvents)}
          // className="hidden"
          >
            <b>See All Cities</b>
          </li>
        </ul>
      </div>
    );
  }
}

export default CitySearch;