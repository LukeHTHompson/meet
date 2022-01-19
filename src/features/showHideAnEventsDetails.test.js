// Libraries and Functions
import { loadFeature, defineFeature } from 'jest-cucumber';
import { mount } from "enzyme";
import React from 'react';

// Components
import App from "../App";


const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {

  test('An event element is collapsed by default', ({ given, when, then }) => {
    given('an event is shown that possesses populated information', () => {

    });

    let AppWrapper;
    let Event;
    when('the event is loaded', async () => {
      AppWrapper = await mount(<App />);
      AppWrapper.update();
      Event = AppWrapper.find('.event')
      expect(Event).not.toHaveLength(0);
    });

    let EventDetails;
    then('the populated information should not be expanded into full view', () => {
      EventDetails = AppWrapper.find('.details-expanded');
      expect(EventDetails).toHaveLength(0);
      AppWrapper.unmount();
    });
  });

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  test('User can expand an event to see its details', ({ given, when, then }) => {

    let AppWrapper;
    let Event;
    given('an event is shown possesses populated information which is collapsed', async () => {
      AppWrapper = await mount(<App />);
      AppWrapper.update();
      Event = AppWrapper.find('.event');
      expect(Event).not.toHaveLength(0);
    });

    let EventDetailsButton;
    when('the user clicks on that event', () => {
      EventDetailsButton = Event.find('.details-button').first();
      EventDetailsButton.simulate('click');
    });

    let EventDetails;
    then('the populated information should be expanded into full view', () => {
      EventDetails = AppWrapper.find('.details-expanded');
      expect(EventDetails).toHaveLength(1);
      AppWrapper.unmount();
    });
  });

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  test('User can collapse an event to hide its details', ({ given, when, then }) => {

    let AppWrapper;
    let Event;
    let EventDetailsButton;
    let EventDetails;
    given('an event possesses populated information which is expanded', async () => {
      AppWrapper = await mount(<App />);
      AppWrapper.update();
      Event = AppWrapper.find('.event');
      expect(Event).not.toHaveLength(0);
      EventDetailsButton = Event.find('.details-button').first();
      // One click expands details
      EventDetailsButton.simulate('click');
      AppWrapper.update();
      EventDetails = AppWrapper.find('.details-expanded');
      expect(EventDetails).toHaveLength(1);
    });

    when('the user clicks on that event header or it’s information', async () => {
      // Second click collapses details
      EventDetailsButton.simulate('click');
      // Update to give time for details to collapse before moving on
      AppWrapper.update();
      // Redefine EventDetails here to ensure we test the value as evaluated AFTER the second click, not the stale value from BEFORE the 2nd click
      EventDetails = AppWrapper.find('.details-expanded');
    });

    then('that information should be collapsed out of full view', () => {
      expect(EventDetails).toHaveLength(0);
      AppWrapper.unmount();
    });
  });
});