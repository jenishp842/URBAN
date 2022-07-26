const tc = require("time-slots-generator");

const hour = new Date().getHours() * 60;
const end = hour + 60;
console.log(
  tc.getTimeSlots([["", 10 * 60 - 1], [(10 + 8) * 60]], false, 30),
  new Date().getDate()
);
