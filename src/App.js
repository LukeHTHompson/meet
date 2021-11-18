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

class App extends Component {

  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({ events, locations: extractLocations(events) });
      }
    });
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  state = {
    events: [],
    locations: []
  }

  updateEvents = (location) => {
    getEvents().then((events) => {
      // Check if the location parameter passed in was "all"
      const locationEvents = (location === "all") ?
        // If location = "all" then DO NOT filter events before setting state below
        events
        :
        // If location != "all" then DO filter events before setting state below
        events.filter((event) => event.location === location);
      this.setState({
        events: locationEvents
      });
    });
  }

  render() {
    return (
      <div className="App">
        <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
        <NumberOfEvents />
        <EventList events={this.state.events} />
      </div>
    );
  }
}

export default App;