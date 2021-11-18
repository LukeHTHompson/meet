// src/__tests__/EventList.test.js

// Main Imports
import React from "react";
import { shallow } from "enzyme";


// Components/Data
import EventList from "../EventList";
import Event from "../Event";
import { mockData } from "../mock-data";


// TEST(S)
describe("<EventList /> Component", () => {

  // Must render EXACTLY ONE <Event /> PER object in the array defined by the prop "events"
  test("Render Correct # of Events", () => {
    // EventList is given an "events" prop which is an array with 4 empty objects
    const EventListWrapper = shallow(<EventList events={mockData} />);
    expect(EventListWrapper.find(Event)).toHaveLength(mockData.length);
  });
});