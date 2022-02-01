# Meet App

### Project:

This project is to create an application that will allow users to see a list of events upcoming in cities across Virginia. The events will include details to assist users in not only knowing about these events, but potentially attending them. In the future more functinnality may be added to allow users to post their own hosted events on the app.

### Running the App:

This app can be visited at https://lukehthompson.github.io/meet/

### Project dependencies:

    "@testing-library/jest-dom": "^5.15.0",
    "@testing-library/react": "^11.2.7",
    "@testing-library/user-event": "^12.8.3",
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-scripts": "4.0.3",
    "web-vitals": "^0.2.4",
    "workbox-background-sync": "^5.1.4",
    "workbox-broadcast-update": "^5.1.4",
    "workbox-cacheable-response": "^5.1.4",
    "workbox-core": "^5.1.4",
    "workbox-expiration": "^5.1.4",
    "workbox-google-analytics": "^5.1.4",
    "workbox-navigation-preload": "^5.1.4",
    "workbox-precaching": "^5.1.4",
    "workbox-range-requests": "^5.1.4",
    "workbox-routing": "^5.1.4",
    "workbox-strategies": "^5.1.4",
    "workbox-streams": "^5.1.4"

### API(s) Used:

  - Google Calendar API
  
  
# Test Case Summaries:

#### FEATURE 1: FILTER EVENTS BY CITY

As a User,  
I should be able to filter events by city  
So that I can see the list of events that take place in that city  

- Scenario 1: When user hasn’t searched for a city, show upcoming events from all cities.  

    Given user hasn’t searched for any city  
    When the user opens the app  
    Then the user should see a list of all upcoming events  
  
-	Scenario 2: User should see a list of suggestions when they search for a city.  
  
    Given the main page is open  
    When user starts typing in the city textbox  
    Then the user should see a list of cities (suggestions) that match what they’ve typed  
  
-	Scenario 3: User can select a city from the suggested list.  

    Given the user was typing “Berlin” in the city textbox, and the list of suggested cities is showing  
    When the user selects a city (e.g., “Berlin, Germany”) from the list  
    Then their city should be changed to that city (i.e., “Berlin, Germany”) and the user should receive a list of upcoming events in that city  
  
#### FEATURE 2: SHOW/HIDE AN EVENT'S DETAILS

As a User,  
I should be able to expand and hide event details  
So that I can view full information for only those events I choose to  

-	Scenario 1: An event element is collapsed by default

    Given an event is shown that possesses populated information  
    When the event is loaded  
    Then the populated information should not be expanded into full view  
    
-	Scenario 2: User can expand an event to see its details

    Given an event is shown possesses populated information which is collapsed  
    When the user clicks on that event  
    Then the populated information should be expanded into full view  
    
-	Scenario 3: User can collapse an event to hide its details

    Given an event possesses populated information which is expanded  
    When the user clicks on that event header or it’s information  
    Then that information should be collapsed out of full view  

#### FEATURE 3: SPECIFY NUMBER OF EVENTS

As a User,  
I should be able to decide how many events to be shown  
So that I don’t miss out on any events because they’re hidden/overshadowed.  

-	Scenario 1: When user hasn’t specified a number, 32 is the default number

    Given that the user has not specified a number of events to be shown manually  
    When events are loaded for the user to view  
    Then only up to 32 events should be loaded  
    
-	Scenario 2: User can change the number of events they want to see

    Given that the user does manually set a number of events to be shown  
    When events are loaded for the user to view  
    Then events should be loaded up to their number (or until no events remain)  

#### FEATURE 4: USE THE APP WHEN OFFLINE

As a User,  
I should be able to access previously seen event info offline  
So that even on the go I can check the details of events that interest me.  

-	Scenario 1: Show cached data when there’s no internet connection

    Given that a user accesses the app from offline  
    When that user views events they saw online previously  
    Then the cached information for that event should still be accessible  
    
-	Scenario 2: Show error when user changes the settings (city, time range)

    Given that a user accesses the app from offline  
    When that user attempts to alter app settings (city, time range)  
    Then the user should be shown an error as these cannot be altered offline  

#### FEATURE 5: DATA VISUALIZATION

As a User,  
I should be able to visualize how many events are upcoming in each city  
So that I can filter my search for events appropriately.  

-	Scenario 1: Show a chart with the number of upcoming events in each city

    Given that a user accesses the application’s homepage  
    When that user clicks “All Events – All Cities”  
    Then a visual representation of the number of events in every city is displayed  


# API ENDPOINTS/SERVICE INFO

#### Service Information

service: auth-server  
stage: dev  
region: us-east-1  
stack: auth-server-dev  
resources: 26  
api keys:  
  None  
endpoints:  
  GET - https://6iiyeovdya.execute-api.us-east-1.amazonaws.com/dev/api/get-auth-url  
  GET - https://6iiyeovdya.execute-api.us-east-1.amazonaws.com/dev/api/token/{code}  
  GET - https://6iiyeovdya.execute-api.us-east-1.amazonaws.com/dev/api/get-events/{access_token}  
functions:  
  getAuthURL: auth-server-dev-getAuthURL  
  getAccessToken: auth-server-dev-getAccessToken  
  getCalendarEvents: auth-server-dev-getCalendarEvents  
layers:  
  None  
Serverless: Deprecation warning: Resolution of lambda version hashes was improved with better algorithm, which will be used in next major release.  
            Switch to it now by setting "provider.lambdaHashingVersion" to "20201221".  
            While it is highly encouraged to upgrade to new algorithm, you can still use the old approach by setting "provider.lambdaHashingVersion" to "20200924".  
            More Info: https://www.serverless.com/framework/docs/deprecations/#LAMBDA_HASHING_VERSION_V2  
  
Improve API performance – monitor it with the Serverless Dashboard: run "serverless"  
