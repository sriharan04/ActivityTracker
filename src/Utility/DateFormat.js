export const dateformat = date => {
  let newArray = date.split(" ");
  let val = {
    Jan: "January",
    Feb: "February",
    Mar: "March",
    Apr: "April",
    May: "May",
    Jun: "June",
    Jul: "July",
    Aug: "August",
    Sep: "September",
    Oct: "October",
    Nov: "November",
    Dec: "December"
  };
  let out = val[newArray[0]];
  let inc;
  if (newArray[4]) inc = newArray[4].includes("PM");
  else inc = newArray[3].includes("PM");
  let time = "";
  if (inc) {
    let oldtime = "";
    if (newArray[4]) {
      oldtime = newArray[4].split("PM");
    } else {
      oldtime = newArray[3].split("PM");
    }
    let hrmin = oldtime[0].split(":");
    let hr = 12 + parseInt(hrmin[0]);
    time = hr + ":" + hrmin[1] + ":" + "00";
  } else {
    let oldtime = "";
    if (newArray[4]) {
      oldtime = newArray[4].split("AM");
    } else {
      oldtime = newArray[3].split("AM");
    }
    let hrmin = oldtime[0].split(":");
    let hr = parseInt(hrmin[0]);
    time = hr + ":" + hrmin[1] + ":" + "00";
  }
  let exactTime = out + " " + newArray[1] + ", " + newArray[2] + " " + time;
  return exactTime;
};
