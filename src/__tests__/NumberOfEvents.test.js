// src/__tests__/NumberOfEvents.test.js

// Main Imports
import React from "react";
import { shallow } from "enzyme";

// Components
import NumberOfEvents from "../NumberOfEvents";

describe("<NumberOfEvents /> Component", () => {

  let NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents />);
  });

  // Must have an alement of class "limit"
  test("Contains element with class 'limit'", () => {
    expect(NumberOfEventsWrapper.find(".limit")).toHaveLength(1);
  });

  // Must default to value of 32 for element with class "limit"
  test("Element of class 'limit' defaults to value of 32", () => {
    expect(NumberOfEventsWrapper.find(".limit").prop("value")).toBe(32);
  })

  // Must see that value property of element with class "limit" reflects the value of state "limit"
  test("Change value of element with class 'limit' based on value of state 'limit'", () => {
    NumberOfEventsWrapper.setState({
      limit: 99
    });
    expect(NumberOfEventsWrapper.find(".limit").prop("value")).toBe(99);
  })

  // Must see state "limit" change from "32" to "10" based on simulating change event with a value 
  // of "10"
  test("Change State 'limit' when text input changes", () => {
    NumberOfEventsWrapper.setState({
      limit: 32
    });
    const eventObject = { target: { value: 10 } };
    // Finds the element with class "city" and changes the value of that element to "Berlin" based on
    // eventObject having the value "Berlin"
    NumberOfEventsWrapper.find(".limit").simulate("Change", eventObject);
    expect(NumberOfEventsWrapper.state("limit")).toBe(10);
  });

});