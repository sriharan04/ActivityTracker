import React from "react";
import classes from "./RowComponent.css";
const RowComponent = props => {
  function handleClick() {
    if (!props.disable) {
      props.click(props.id);
    }
  }

  let nm = "";
  if (props.name) {
    let profile = props.name.split(" ");
    for (let i = 0; i < profile.length; i++) {
      nm = nm + profile[i].charAt(0);
    }
  }

  return (
    <li
      className={classes.section_list}
      disabled={props.disable}
      onClick={handleClick}
    >
      <div className={classes.section_list_profile}>
        <span className={classes.profile_short}>{nm}</span>
      </div>
      <p className={classes.profile_name} style={props.style}>
        {props.name}
      </p>
    </li>
  );
};

export default RowComponent;
