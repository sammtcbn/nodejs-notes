/*
Before running:
  npm install sync
  npm install linux-os-info
ref: https://www.npmjs.com/package/linux-os-info
Written by sammtcbn 2020.1.3
*/

const osInfo = require('linux-os-info')

// synchronous - use an options argument with {mode: 'sync'}
var result = osInfo({mode: 'sync'})
console.log(`You are using ${result.pretty_name} on a ${result.arch} machine`)


/* Result on Ubuntu 19.10

$ node linux-os-info.js
You are using Ubuntu 19.10 on a x64 machine

*/
