// src/App.js

// Main Imports
import React, { Component } from "react";

// Components
import EventList from "./EventList";
import CitySearch from "./CitySearch";
import NumberOfEvents from "./NumberOfEvents";
import WelcomeScreen from "./WelcomeScreen";

// Styling
import "./App.css";
import './nprogress.css';

// Other
import { getEvents, extractLocations, checkToken, getAccessToken } from './api';

class App extends Component {

  state = {
    events: [],
    locations: [],
    numberOfEvents: 32,
    showWelcomeScreen: undefined
  }

  async componentDidMount() {
    this.mounted = true;
    const accessToken = localStorage.getItem('access_token');
    const isTokenValid = (await checkToken(accessToken)).error ? false : true;
    const searchParams = new URLSearchParams(window.location.search);
    const code = searchParams.get("code");
    this.setState({ showWelcomeScreen: !(code || isTokenValid) });
    if ((code || isTokenValid) && this.mounted) {
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
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  updateEvents = async (location = null, eventCount = null) => {
    await getEvents().then((events) => {
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
    if (this.state.showWelcomeScreen === undefined) return <div className="App" />

    return (
      <div className="App">
        {/* <h1>Meet App</h1> */}
        <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} numberOfEvents={this.state.numberOfEvents} />
        <NumberOfEvents numberOfEvents={this.state.numberOfEvents} updateNumberOfEvents={this.updateNumberOfEvents} />
        <EventList events={this.state.events} />
        <WelcomeScreen showWelcomeScreen={this.state.showWelcomeScreen} getAccessToken={() => { getAccessToken() }} />
      </div>
    );
  }
}

export default App;