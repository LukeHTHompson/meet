// src/__tests__/Event.test.js

// Main Imports
import React from "react";
import { shallow } from "enzyme";

// Components/Data
import Event from "../Event";
import { mockData } from "../mock-data";

// TEST(S)
describe("<Event /> Component", () => {

  let event, EventWrapper;
  beforeAll(() => {
    event = mockData[0];
    EventWrapper = shallow(<Event event={event} />);
  });

  // Must render a button with class "details-button" for viewing more details on each event
  test("Render 'Details' button on each Event", () => {
    // EventList is given an "events" prop which is an array with 4 empty objects
    expect(EventWrapper.find(".details-button")).toHaveLength(1);
  });

  // Must render time details while collapsed
  test("Render time info on each Event while collapsed", () => {
    expect(EventWrapper.find(".time")).toHaveLength(1);
  });

  // Must render title details while collapsed
  test("Render title info on each Event while collapsed", () => {
    expect(EventWrapper.find(".title")).toHaveLength(1);
  });

  // Must render group details while collapsed
  test("Render group info on each Event while collapsed", () => {
    expect(EventWrapper.find(".group")).toHaveLength(1);
  });

  // Must render attendee count details while collapsed
  test("Render attendee count info on each Event while collapsed", () => {
    expect(EventWrapper.find(".attendee-count")).toHaveLength(1);
  });

  // Must render ACCURATE time details while collapsed
  test("Render ACCURATE time info on each Event while collapsed", () => {
    const dateString = Object.values(event.start)[0];
    const startHour = dateString.slice(11, 16);
    const startYearMonthDay = dateString.slice(0, 10);
    const displayStartTime = startHour + " - " + startYearMonthDay;
    expect(EventWrapper.find(".time").text()).toBe(displayStartTime);
  });

  // Must render ACCURATE title details while collapsed
  test("Render ACCURATE title info on each Event while collapsed", () => {
    expect(EventWrapper.find(".title").text()).toBe(event.summary + " | " + event.location);
  });

  // Must render ACCURATE group details while collapsed
  test("Render ACCURATE group info on each Event while collapsed", () => {
    const group = Object.values(event.organizer)[0];
    expect(EventWrapper.find(".group").text()).toBe(group);
  });

  // Must render ACCURATE attendee count details while collapsed - Currently not sure where this comes from, so leaving this test commented out.
  // test("Render ACCURATE attendee count info on each Event while collapsed", () => {
  //   expect(EventWrapper.find(".attendee-count")).toBe("???")
  // });

  // Must have no detail info rendered by default
  test("Extra Details are Hidden by default", () => {
    expect(EventWrapper.find(".details-expanded")).toHaveLength(0);
  })

  // Must render detail info when clicking details button
  test("Render more info on clicking details button", () => {
    EventWrapper.find(".details-button").simulate("click");
    expect(EventWrapper.find(".details-expanded")).toHaveLength(1);
  });

});