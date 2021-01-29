/*
need to npm install systeminformation
Written by sammtcbn 2020.3.7
*/

const si = require('systeminformation');
var timedata = si.time();
console.log (timedata);

/* Result on Ubuntu 19.10:

$ node systeminformation_time.js
{
  current: 1583519643566,
  uptime: 614823,
  timezone: 'GMT+0800',
  timezoneName: 'Taipei Standard Time'
}

*/
