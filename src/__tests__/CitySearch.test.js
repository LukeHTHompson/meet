// src/__tests__/CitySearch.test.js

// Main Imports
import React from "react";
import { shallow } from "enzyme";

// Components/Data
import CitySearch from "../CitySearch";
import { mockData } from "../mock-data";
import { extractLocations } from "../api";


// TEST(S)
describe("<CitySearch /> component", () => {

  let locations, CitySearchWrapper;
  beforeAll(() => {
    locations = extractLocations(mockData);
    CitySearchWrapper = shallow(<CitySearch locations={locations} updateEvents={() => { }} />);
  });

  // Must render ONLY ONE component with a class name of "city"
  test("Render Text Input", () => {
    expect(CitySearchWrapper.find(".city")).toHaveLength(1);
  });

  // Must render ONLY ONE component with a class name of "suggestions"
  test("Render List of Suggestions", () => {
    expect(CitySearchWrapper.find(".suggestions")).toHaveLength(1);
  });

  // Must have the same for prop "value" of <input className="city"> and state "query" of <CitySearch />
  test("Renders Text Input Correctly", () => {
    const query = CitySearchWrapper.state("query");
    expect(CitySearchWrapper.find(".city").prop("value")).toBe(query);
  });

  // Must see state "query" change from "Munich" to "Berlin" based on simulating change event with a value 
  // of "Berlin"
  test("Change State 'query' when text input changes", () => {
    CitySearchWrapper.setState({
      query: "Munich"
    });
    const eventObject = { target: { value: "Berlin" } };
    // Finds the element with class "city" and changes the value of that element to "Berlin" based on
    // eventObject having the value "Berlin"
    CitySearchWrapper.find(".city").simulate("Change", eventObject);
    expect(CitySearchWrapper.state("query")).toBe("Berlin");
  });

  // Must have the same text displayed in each list item following the element with class "suggestions"
  // as the corresponding location from mockData i.e. first li has the same value as locations[0], second matches locations[1], etc.
  test("Render List of suggestions correctly", () => {
    CitySearchWrapper.setState({ suggestions: locations });
    const suggestions = CitySearchWrapper.state("suggestions");
    // We expect to have a length of suggestions.length + 1 because we manually add "See All Cities"
    expect(CitySearchWrapper.find(".suggestions li")).toHaveLength(suggestions.length + 1);
    for (let i = 0; i < suggestions.length; i += 1) {
      expect(CitySearchWrapper.find(".suggestions li").at(i).text()).toBe(suggestions[i])
    }
  });

  // Must have the same values in State "suggestions" as we have in state "query"
  test("Suggestion List matches state 'query' when changed", () => {
    CitySearchWrapper.setState({ query: "", suggestions: [] });
    const eventObject = { target: { value: "Berlin" } };
    // Finds the element with class "city" and changes the value of that element to "Berlin" based on
    // eventObject having the value "Berlin"
    CitySearchWrapper.find(".city").simulate("change", eventObject)
    const query = CitySearchWrapper.state("query");
    const filteredLocations = locations.filter((location) => {
      // For each location pulled from MockData, checks to see if the value of query (copy of State "query") is within the location
      // If the value of query is not anywhere in the location then we would return -1, therefore check that we return > -1
      return location.toUpperCase().indexOf(query.toUpperCase()) > -1;
    });
    // Use toEqual() here instead of toBe() since we are comparing complex data types (arrays)
    expect(CitySearchWrapper.state("suggestions")).toEqual(filteredLocations);
  });

  // Must see that State "query" matches value of a "suggestion" list item when that list item is clicked
  test("Selecting suggestion should change State 'query'", () => {
    CitySearchWrapper.setState({
      query: "Berlin"
    });
    const suggestions = CitySearchWrapper.state("suggestions");
    CitySearchWrapper.find(".suggestions li").at(0).simulate("click");
    expect(CitySearchWrapper.state("query")).toBe(suggestions[0]);
  });

  // Must see list of suggestions appear when input bar is selected.
  test("Selecting CitySearch input reveals the suggestions list", () => {
    CitySearchWrapper.find(".city").simulate("focus");
    expect(CitySearchWrapper.state("showSuggestions")).toBe(true);
    expect(CitySearchWrapper.find(".suggestions").prop("style")).not.toEqual({ display: "none" });
  });

  // Must see list of suggestions disappear when a selection is chosen and input bar loses focus.
  test("Selecting a suggestion should hide the suggestions list", () => {
    CitySearchWrapper.setState({
      query: "Berlin",
      showSuggestions: undefined
    });
    CitySearchWrapper.find(".suggestions li").at(0).simulate("click");
    expect(CitySearchWrapper.state("showSuggestions")).toBe(false);
    // expect(CitySearchWrapper.find(".suggestions").prop("style")).toEqual({ display: "none" });
    // I give it the class "hidden" to hide it.
  });

});