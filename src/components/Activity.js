import React from "react";
import Aux from "../HOC/Auxilliary";
import classes from "./Activity.css";
const Activity = props => {
  let newdata = props.data.filter(val => {
    return val.id === props.id;
  });
  let finddata = "";
  if (newdata.length !== 0) {
    finddata = newdata[0];
    console.log(finddata);
  }
  return (
    <Aux>
      <h3 className={classes.center}>Activity Calender</h3>
      <div className={classes.flex_algin}>
        <label className={classes.label}>Name: </label>
        <span>
          <p>{finddata.real_name}</p>
        </span>
        <label className={classes.label}>Location: </label>
        <span>
          <p>{finddata.tz}</p>
        </span>
      </div>
      {props.children}
    </Aux>
  );
};

export default Activity;
