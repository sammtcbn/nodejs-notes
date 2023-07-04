/*
need to npm install systeminformation
Written by sammtcbn 2020.3.7
*/

const si = require('systeminformation');
var moment = require('moment');

var timedata = si.time();

var now = new Date();

var bootTime = moment (now).subtract (timedata.uptime, 'seconds'). format('YYYY/MM/DD HH:mm:ss');

console.log ("boot time = " + bootTime)

/* Result in Ubuntu

$ node show-boot-time.js
boot time = 2020/02/28 23:47:00

Then , use uptime command to verify
$ uptime -s
2020-02-28 23:47:00

Result in Windows

>node show-boot-time.js
boot time = 2020/03/03 19:25:54

Then, use net command to verify
>net statistics workstation

*/
