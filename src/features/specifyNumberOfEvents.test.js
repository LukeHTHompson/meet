// Libraries and Functions
import { loadFeature, defineFeature } from 'jest-cucumber';
import { shallow, mount } from "enzyme";
import React from 'react';
import { getEvents, extractLocations } from "../api";

// Components
import App from "../App";
import CitySearch from "../CitySearch";

// Other
import { mockData } from '../mock-data';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {

  test('When user hasn’t specified a number, 32 is the default number', ({ given, when, then }) => {

    given('that the user has not specified a number of events to be shown manually', async () => {

    });

    let AppWrapper;
    when('events are loaded for the user to view', async () => {
      AppWrapper = await mount(<App />);
      AppWrapper.update();
    });

    let EventList;
    let Limit;
    then('only up to 32 events should be loaded', () => {
      EventList = AppWrapper.find('.event')
      // Cannot test for having more than 32 events as mockData only has 2 events
      expect(EventList).toHaveLength(2)
      // We can however check that the default limit is being set as 32
      Limit = AppWrapper.state('numberOfEvents')
      expect(Limit).toBe(32)
      AppWrapper.unmount();
    });
  });

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  test('User can change the number of events they want to see', ({ given, when, then }) => {

    let AppWrapper;
    let LimitControl;
    let Limit;
    let EventList;
    given('that the user does manually set a number of events to be shown', async () => {
      AppWrapper = await mount(<App />);
      AppWrapper.update();
      LimitControl = AppWrapper.find('.limit');
      LimitControl.simulate('change', { target: { value: 1 } })
      AppWrapper.update();
      EventList = AppWrapper.find('.event');
      // AppWrapper.setState({ numberOfEvents: 1 });
      // AppWrapper.update();
      Limit = AppWrapper.state('numberOfEvents');
      expect(Limit).toBe(1);
    });

    when('events are loaded for the user to view', () => {

    });

    then('events should be loaded up to their number (or until no events remain)', () => {
      expect(EventList).toHaveLength(1);
      AppWrapper.unmount();
    });
  });
});