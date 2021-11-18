// src/__tests__/App.test.js

// Main Imports
import React from "react";
// See 4.3 For details on shallow
// also "https://enzymejs.github.io/enzyme/docs/api/shallow.html#shallowwrapper-api"
import { shallow, mount } from "enzyme";
import App from "../App";

// Components
import EventList from "../EventList";
import CitySearch from "../CitySearch";
import NumberOfEvents from "../NumberOfEvents";
import { mockData } from "../mock-data";
import { extractLocations, getEvents } from "../api";
import { getEventListeners } from "events";


// TEST
// Unit Tests
describe("<App /> component", () => {
  let AppWrapper;
  beforeAll(() => {
    AppWrapper = shallow(<App />);
  });

  // Must render ONLY ONE component named "EventList"
  test("Render List of Events", () => {
    expect(AppWrapper.find(EventList)).toHaveLength(1);
  });

  // Must render ONLY ONE component named "CitySearch"
  test("Render CitySearch", () => {
    expect(AppWrapper.find(CitySearch)).toHaveLength(1);
  });

  // Must render ONLY ONE component named "NumberOfEvents"
  test("Render NumberOfEvents", () => {
    expect(AppWrapper.find(NumberOfEvents)).toHaveLength(1);
  });

});

// Integration Tests
describe("<App /> integration", () => {

  // Must give data from state "events" as a prop "events" to <EventList />
  test("App passes state 'events' as a prop 'events' to component <EventList />", () => {
    // Use of mount() instead of shallow() means that this component will render along with
    // its child components, whereas shallow() only renders the component alone
    const AppWrapper = mount(<App />);
    const AppEventsState = AppWrapper.state("events");

    expect(AppEventsState).not.toEqual(undefined);
    expect(AppWrapper.find(EventList).props().events).toEqual(AppEventsState);
    // Using mount() renders the component to the DOM, and we need to clean up the DOM now
    // by using unmount() on our wrapper
    AppWrapper.unmount();
  });

  // Must give data from state "locations" as a prop "locations" to <CitySearch />
  test("App passes state 'locations' as a prop 'locations' to component <CitySearch />", () => {
    const AppWrapper = mount(<App />);
    const AppLocationsState = AppWrapper.state("locations");

    expect(AppLocationsState).not.toEqual(undefined);
    expect(AppWrapper.find(CitySearch).props().locations).toEqual(AppLocationsState);
    AppWrapper.unmount();
  });

  // Must give a list of events only from the location the user selects
  test("Get list of events matching the location selected by ueser", async () => {
    // Used asyn above because this test include asnyc code, like getEvents() and handleItemClicked()
    const AppWrapper = mount(<App />);
    const CitySearchWrapper = AppWrapper.find(CitySearch);
    // Includes all possible locations from mockData events; does NOT include manually added "See All Cities"
    const locations = extractLocations(mockData);
    CitySearchWrapper.setState({ suggestions: locations });
    const suggestions = CitySearchWrapper.state("suggestions");
    // Randomize the suggested city that we will pick
    const selectedIndex = Math.floor(Math.random() * (suggestions.length));
    const selectedCity = suggestions[selectedIndex];
    // Wait for the component to finish running the onClick function for the clicked suggestion
    // Calling the onClick function directly, possible via instance(), like this also serves as emulating the click
    await CitySearchWrapper.instance().handleItemClicked(selectedCity);
    // Wait to get events
    const allEvents = await getEvents();
    const eventsToShow = allEvents.filter(event => event.location === selectedCity);

    expect(AppWrapper.state("events")).toEqual(eventsToShow);
    AppWrapper.unmount()
  })

  // Must give a list of ALL events when the user selects "See All Cities"
  test("Get a list of ALL events when user selects 'See All Cities' option", async () => {
    const AppWrapper = mount(<App />);
    const suggestionItems = AppWrapper.find(CitySearch).find(".suggestions li");
    await suggestionItems.at(suggestionItems.length - 1).simulate("click");
    const allEvents = await getEvents();

    expect(AppWrapper.state("events")).toEqual(allEvents)
    AppWrapper.unmount()
  });

});