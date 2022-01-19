// src/App.js

// Main Imports
import React, { Component } from "react";

// Components
import EventList from "./EventList";
import CitySearch from "./CitySearch";
import NumberOfEvents from "./NumberOfEvents";

// Styling
import "./App.css";
import { getEvents, extractLocations } from "./api";
import './nprogress.css';

class App extends Component {

  state = {
    events: [],
    locations: [],
    numberOfEvents: 32
  }

  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({
          events,
          locations: extractLocations(events),
          numberOfEvents: 32
        });
      }
    });
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  updateEvents = (location = null, eventCount = null) => {
    getEvents().then((events) => {
      // Check if the location parameter passed in was "all" or something else
      location = location ? location : "all";

      const locationEvents =
        location === "all"
          // If location = "all" then DO NOT filter events before setting state below
          ? events
          // If location != "all" then DO filter events before setting state below
          : events.filter((event) => event.location === location);

      this.setState({
        events: locationEvents.slice(
          0,
          eventCount ? eventCount : this.state.numberOfEvents
        )
      });
    });
  };

  updateNumberOfEvents = (limit) => {
    // Perform checks and handling for limit <= 0
    // Should only allow positive integers for limit (with a minimum 1?)
    if (limit === undefined || limit === '' || limit < 0) {
      this.setState({
        numberOfEvents: 32
      });
      this.updateEvents(null, 32)

    } else if (limit !== undefined && limit !== '' && limit > 0) {
      this.setState({
        numberOfEvents: limit
      });
      this.updateEvents(null, limit)
    }
  }

  render() {
    return (
      <div className="App">
        <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} numberOfEvents={this.state.numberOfEvents} />
        <NumberOfEvents numberOfEvents={this.state.numberOfEvents} updateNumberOfEvents={this.updateNumberOfEvents} />
        <EventList events={this.state.events} />
      </div>
    );
  }
}

export default App;