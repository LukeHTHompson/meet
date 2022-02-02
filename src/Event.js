// src/Event.js

import React, { Component } from "react";

class Event extends Component {

  state = {
    hidden: true,
    showHide: "Show Details"
  }

  toggleClass = () => {
    const currentState = this.state.hidden
    this.setState({ hidden: !currentState });
    if (this.state.showHide === "Show Details") { this.setState({ showHide: "Hide Details" }) };
    if (this.state.showHide === "Hide Details") { this.setState({ showHide: "Show Details" }) };
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
    // const eventDescription = Object.values(event.description)
    const eventDescription = event.description
    const eventLink = event.htmlLink
    const hangoutLink = event.hangoutLink
    const created = event.created ? event.created : ""
    const updated = event.updated ? event.updated : ""

    // This is the e-mail value of the event organizer
    const group = Object.values(event.organizer)[0];

    return <div className="event">
      <div className="details-collapsed">
        <p className="time">{displayStartTime}</p>
        <p className="title">{event.summary} | {event.location}</p>
        {/* Unclear what Group should pull from in MockData, going to use Organizer: Email for now */}
        {group && <a className="group" href={`mailto:${group}`}>Email Organizer</a>}
        {/* There is no data on number of attendees in MockData */}
        {/* <p className="attendee-count">Attendees: Count</p> */}
      </div>
      {/* <div className={this.state.hidden ? "details-expanded hidden" : "details-expanded"}> */}
      {!this.state.hidden &&
        <div className="details-expanded">
          {eventDescription && <p className="description">{eventDescription}</p>}
          <p className="public">Public/Private: Public</p>
          {eventLink && <p><a className="calendar-event-link" href={eventLink}>Calendar Event Link</a></p>}
          {hangoutLink && <p><a className="event-hangout-link" href={hangoutLink}>Event Hangout Link</a></p>}
          {/* CSS to make these smaller font and gray */}
          {created && <p className="created">Created: {created}</p>}
          {updated && <p className="updated">Updated: {updated}</p>}
        </div>
      }
      <button
        className="details-button"
        onClick={this.toggleClass}
      >
        {this.state.showHide}
      </button>
    </div>;
  }
}

export default Event;