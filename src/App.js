// src/App.js

// Main Imports
import React, { Component } from "react";
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

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
    events: this.state.events ? this.state.events : [],
    locations: this.state.locations ? this.state.locations : [],
    searchLocation: this.state.searchLocation ? this.state.searchLocation : 'all',
    numberOfEvents: this.state.numberOfEvents ? this.state.numberOfEvents : 32,
    showWelcomeScreen: undefined
  }

  async componentDidMount() {
    this.mounted = true;
    let accessToken = localStorage.getItem('access_token');
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
            numberOfEvents: this.state.numberOfEvents ? this.state.numberOfEvents : 32
          });
        }
      });
    }
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  updateEvents = (location = null, eventCount = null) => {
    getEvents().then((events) => {
      // Check if the location parameter passed in was "all" or something else
      // location = location ? location : "all";
      location = this.state.searchLocation ? this.state.searchLocation : "all"
      this.setState({
        searchLocation: location
      });

      const locationEvents =
        location === "all"
          // If location = "all" then DO NOT filter events before setting state below
          ? events
          // If location != "all" then DO filter events before setting state below
          : events.filter((event) => event.location === location);

      this.setState({
        // searchLocation: location,
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
    const searchLocation = this.state.searchLocation ? this.state.searchLocation : "all"
    if (limit === undefined || limit === '' || limit < 0) {
      this.setState({
        numberOfEvents: 32
      });
      this.updateEvents(searchLocation, 32)

    } else if (limit !== undefined && limit !== '' && limit > 0) {
      this.setState({
        numberOfEvents: parseInt(limit, 10)
      });
      this.updateEvents(searchLocation, limit)
    }
  }

  getData = () => {
    console.log('chart: ', this.state);
    const { locations, events } = this.state;
    const data = locations.map((location) => {
      const number = events.filter((event) => event.location === location).length
      const city = location.split(', ').shift()
      return { city, number };
    })
    return data;
  };

  render() {
    if (this.state.showWelcomeScreen === undefined) return <div className="App" />
    const { locations, numberOfEvents, events } = this.state;
    // if (events.length !== numberOfEvents) return <div className="App" />

    return (
      <div className="App">
        {/* <h1>Meet App</h1> */}
        <CitySearch locations={locations} updateEvents={this.updateEvents} numberOfEvents={numberOfEvents} />
        <NumberOfEvents numberOfEvents={numberOfEvents} updateNumberOfEvents={this.updateNumberOfEvents} />
        {/* CHART START */}
        <ResponsiveContainer height={400}>
          <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }} >
            <CartesianGrid />
            <XAxis type="category" dataKey="city" name="city" />
            <YAxis type="number" dataKey="number" name="number of events" />
            <Tooltip cursor={{ strokeDasharray: '3 3' }} />
            <Scatter data={this.getData()} fill="#8884d8" />
          </ScatterChart>
        </ResponsiveContainer>
        {/* CHART END */}
        <EventList events={events} />
        <WelcomeScreen showWelcomeScreen={this.state.showWelcomeScreen} getAccessToken={() => { getAccessToken() }} />
      </div>
    );
  }
}

export default App;