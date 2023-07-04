/*
need to npm install date2obj
ref to https://www.npmjs.com/package/date2obj
ref to https://github.com/tigercosmos/date2obj
Written by sammtcbn 2020.1.14
*/
const date2obj = require('date2obj');
const currentTime = date2obj();
console.log(currentTime);

/* Result:

$ node date2obj_ex.js
{ year: '2020',
  month: '01',
  day: '14',
  hour: '10',
  minute: '55',
  second: '34' }

*/
