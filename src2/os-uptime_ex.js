/*
need to npm install os-uptime
Written by sammtcbn 2020.3.7
*/

const uptime = require('os-uptime');
console.log('System was started at: %s', uptime().toLocaleString());

/* Result on Ubuntu 19.10:

$ node os-uptime_ex.js
System was started at: 2/28/2020, 11:47:00 PM

BUT, it cannot show correct booting time running on Windows

*/
