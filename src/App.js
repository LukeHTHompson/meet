// Main Imports
import React from "react";

// Components
import EventList from "./EventList";
import CitySearch from "./CitySearch";
import NumberOfEvents from "./NumberOfEvents";

// Styling
import "./App.css";


function App() {
  // Define Events
  return (
    <div className="App">
      <CitySearch />
      <NumberOfEvents />
      {/* Pass Events as a prop "Events" to EventList */}
      <EventList />
    </div>
  );
}

export default App;
