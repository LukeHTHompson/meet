Feature: Specify Number of Events

Scenario: When user hasn’t specified a number, 32 is the default number
Given that the user has not specified a number of events to be shown manually
When events are loaded for the user to view
Then only up to 32 events should be loaded

Scenario: User can change the number of events they want to see
Given that the user does manually set a number of events to be shown
When events are loaded for the user to view
Then events should be loaded up to their number (or until no events remain)