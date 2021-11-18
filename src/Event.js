// src/Event.js

import React, { Component } from "react";

class Event extends Component {

  state = {
    hidden: true
  }

  toggleClass = () => {
    const currentState = this.state.hidden
    this.setState({ hidden: !currentState });
  }

  render() {
    const { event } = this.props;
    // How to handle difference in timezone?
    // Ignoring this issue for now.

    // Example Data from API Call: 2020-05-19T16:00:00+02:00
    // Using German standard for date display currently YYYY-MM-DD for simplicity
    const dateString = Object.values(event.start)[0];
    const startHour = dateString.slice(11, 16);
    const startYearMonthDay = dateString.slice(0, 10);
    const displayStartTime = startHour + " - " + startYearMonthDay;

    const eventDescription = Object.values(event.description)
    const eventLink = Object.values(event.htmlLink)

    // This is the e-mail value of the event organizer
    const group = Object.values(event.organizer)[0];

    return <div>
      <div className="details-collapsed">
        <p className="time">{displayStartTime}</p>
        <p className="title">{event.summary}</p>
        {/* Unclear what Group should pull from in MockData, going to use Organizer: Email for now */}
        <p className="group">{group}</p>
        {/* There is no data on number of attendees in MockData */}
        <p className="attendee-count">Attendees: Count</p>
      </div>
      <div className={this.state.hidden ? "details-expanded hidden" : "details-expanded"}>
        <p className="location">ADDRESS TO GO HERE</p>
        <p className="description">{eventDescription}</p>
        <p className="public">public</p>
        <p className="event-link">{eventLink}</p>
      </div>
      <button
        className="details-button"
        onClick={this.toggleClass}
      >
        Details
      </button>
    </div>;
  }
}

export default Event;