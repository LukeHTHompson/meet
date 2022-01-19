Feature: show/hide an event's details

Scenario: An event element is collapsed by default
Given an event is shown that possesses populated information
When the event is loaded
Then the populated information should not be expanded into full view

Scenario: User can expand an event to see its details
Given an event is shown possesses populated information which is collapsed
When the user clicks on that event
Then the populated information should be expanded into full view

Scenario: User can collapse an event to hide its details
Given an event possesses populated information which is expanded
When the user clicks on that event header or it’s information
Then that information should be collapsed out of full view