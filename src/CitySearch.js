// src/CitySearch.js

// Main Imports
import React, { Component } from "react";

class CitySearch extends Component {

  state = {
    query: "",
    suggestions: []
  }

  handleInputChanged = (event) => {
    const value = event.target.value;
    const suggestions = this.props.locations.filter((location) => {
      return location.toUpperCase().indexOf(value.toUpperCase()) > -1;
    });
    this.setState({
      query: value,
      suggestions,
    });
  }

  handleItemClicked = (suggestion) => {
    this.setState({
      query: suggestion
    });

    // Update the state "events" in <App />
    this.props.updateEvents(suggestion);
  }

  // Need a way to make sure that "See All Cities" and other suggestions do not appear at launch
  // Also need to make sure they go away once a suggestion is chosen, or the input field loses focus
  render() {
    return (
      <div className="CitySearch">
        <input
          type="text"
          className="city"
          value={this.state.query}
          onChange={this.handleInputChanged}
        />
        <ul className="suggestions">
          {this.state.suggestions.map((suggestion) => (
            <li
              key={suggestion}
              onClick={() => this.handleItemClicked(suggestion)}
            >
              {suggestion}
            </li>
          ))}
          <li key="all" onClick={() => this.handleItemClicked("all")}
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