import React, { Component } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import classes from "./Cal.css";
import moment from "moment";
import "./Cal.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { dateformat } from "../Utility/DateFormat";

const localizer = momentLocalizer(moment);

class Cal extends Component {
  constructor() {
    super();

    this.state = {
      events: []
    };
  }

  componentDidMount() {
    let event = [];
    let newdata = this.props.data.filter(val => {
      return val.id === this.props.id;
    });
    if (newdata) {
      newdata[0].activity_periods.map(val => {
        let start = dateformat(val.start_time);
        let end = dateformat(val.end_time);
        event.push({
          allDay: false,
          title: "",
          start: new Date(start),
          end: new Date(end)
        });
        return true;
      });
      const update = { ...this.state.events };
      update.events = event;
      this.setState({ events: update.events });
    }
  }

  render() {
    return (
      <div>
        <div className={classes.calendar}>
          <Calendar
            events={this.state.events}
            startAccessor="start"
            endAccessor="end"
            defaultDate={moment().toDate()}
            localizer={localizer}
            views={["month", "day"]}
            eventPropGetter={(event, start, end, isSelected) => {
              let newStyle = {
                backgroundColor: "rgba(73, 75, 75, 0.829)",
                color: "whitesomke",
                borderRadius: "1rem",
                width: "1rem",
                height: "1rem",
                border: "none",
                margin: "0rem",
                marginLeft: "2rem",
                textAlign: "center"
              };
              return {
                className: "",
                style: newStyle
              };
            }}
          />
        </div>
      </div>
    );
  }
}

export default Cal;
