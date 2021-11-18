// src/__tests__/App.test.js

// Main Imports
import React from "react";
// See 4.3 For details on shallow
// also "https://enzymejs.github.io/enzyme/docs/api/shallow.html#shallowwrapper-api"
import { shallow } from "enzyme";
import App from "../App";

// Components
import EventList from "../EventList";
import CitySearch from "../CitySearch";
import NumberOfEvents from "../NumberOfEvents";


// TEST(S)
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