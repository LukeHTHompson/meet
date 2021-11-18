// Main Imports
import { mockData } from "./mock-data";

/**
 *
 * @param {*} events:
 * The following function should be in the “api.js” file.
 * This function takes an events array, then uses map to create a new array with only locations.
 * It will also remove all duplicates by creating another new array using the spread operator and spreading a Set.
 * The Set will remove all duplicates from the array.
 */

export const extractLocations = (events) => {
  var extractLocations = events.map((event) => event.location);
  var locations = [...new Set(extractLocations)];
  return locations;
};

// export const extractTimes = (events) => {
//   var extractStartTimes = events.map((event) => event.start.dateTime)
//   var extractEndTimes = events.map((event) => event.end.dateTime)
//   var extractTimeZones = events.map((event) => event.start.timeZone)
//   var times = [...{ start: extractStartTimes, end: extractEndTimes, zone: extractTimeZones }]
//   return times
// }

export const getEvents = async () => {
  return mockData;
};