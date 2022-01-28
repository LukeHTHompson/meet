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
    events: [],
    locations: [],
    numberOfEvents: 32,
    showWelcomeScreen: undefined
  }

  async componentDidMount() {
    this.mounted = true;
    const accessToken = localStorage.getItem('access_token');
    if (!accessToken) { accessToken = await getAccessToken() }
    const isTokenValid = (await checkToken(accessToken)).error ? false : true;
    const searchParams = new URLSearchParams(window.location.search);
    const code = searchParams.get("code");
    this.setState({ showWelcomeScreen: !(code || isTokenValid) });
    if ((code || isTokenValid) && this.mounted) {
      await getEvents().then((events) => {
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
    return (
      <div className="App">
        {/* <h1>Meet App</h1> */}
        <CitySearch locations={locations} updateEvents={this.updateEvents} numberOfEvents={numberOfEvents} />
        <NumberOfEvents numberOfEvents={numberOfEvents} updateNumberOfEvents={this.updateNumberOfEvents} />
        {/* CHART START */}
        <ResponsiveContainer height={400}>
          <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }} >
            <CartesianGrid />
            <XAxis type="category" dataKey="City" name="City" />
            <YAxis type="number" dataKey="Number" name="Number of Events" />
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