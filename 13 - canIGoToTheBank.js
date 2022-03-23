// create a canIGoToTheBank function that will receive 2 parameters: the day of the week and the time. The function must return true only if the bank is still open.
// keep in mind that the bank is open from Monday through Friday and from 10:00 until 18:00

const canIGoToTheBank = (day, time) => {
  if (
    day === "Monday" ||
    day === "Tuesday" ||
    day === "Wednesday" ||
    day === "Thursday" ||
    (day === "Friday" && time >= 10 && time <= 18)
  ) {
    return true;
  } else {
    return false;
  }
};

console.log(canIGoToTheBank("Sunday", 10));
