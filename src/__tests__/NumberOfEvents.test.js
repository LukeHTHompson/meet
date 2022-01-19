// src/__tests__/NumberOfEvents.test.js

// Main Imports
import React from "react";
import { shallow, mount } from "enzyme";

// Components
import App from "../App";
import NumberOfEvents from "../NumberOfEvents";

// MUST REWRITE THESE AS INTEGRATED TEST SO THAT 'this.props.updateNumberOfEvents(value)' IN NUMBEROFEVENTS COMPONENT CAN BE RECEIVED FROM <APP /> AND USED PROPERLY
describe("<NumberOfEvents /> Component", () => {

  let AppWrapper;
  let NumberOfEventsWrapper;
  beforeAll(() => {
    AppWrapper = mount(<App />);
    NumberOfEventsWrapper = AppWrapper.find(NumberOfEvents); //shallow(<NumberOfEvents />);
  });

  // Must have an alement of class "limit"
  test("Contains element with class 'limit'", () => {
    expect(NumberOfEventsWrapper.find(".limit")).toHaveLength(1);
    AppWrapper.unmount()
  });

  // // Must default to value of 32 for element with class "limit"
  // test("Element of class 'limit' defaults to value of 32", () => {
  //   expect(NumberOfEventsWrapper.find(".limit").prop("value")).toBe(32);
  // })

  // // Must see that value property of element with class "limit" reflects the value of state "limit"
  // test("Change value of element with class 'limit' based on value of state 'limit'", () => {
  //   AppWrapper.setState({
  //     NumberOfEvents: 99
  //   });
  //   expect(NumberOfEventsWrapper.find(".limit").prop("value")).toBe(99);
  // })

  // // Must see state "limit" change from "32" to "10" based on simulating change event with a value 
  // // of "10"
  // test("Change State 'limit' when text input changes", () => {
  //   NumberOfEventsWrapper.setState({
  //     limit: 32
  //   });
  //   const eventObject = { target: { value: 10 } };
  //   // Primes an event object with value 10 which will be used to simulate changing the input field to '10'
  //   NumberOfEventsWrapper.find(".limit").simulate("Change", eventObject);
  //   expect(NumberOfEventsWrapper.state("limit")).toBe(10);
  // });

});