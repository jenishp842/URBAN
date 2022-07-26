const moment = require('moment');

console.log(
  moment(new Date(1645624329000), 'YYYYMMDD').fromNow(),
  new Date() - new Date(1645624329000),
);
console.log(moment('20111031', 'YYYYMMDD').fromNow());
