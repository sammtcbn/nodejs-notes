// need to install os-name
//     npm install os-name
// ref: https://www.npmjs.com/package/os-name
// Written by sammtcbn 2019.12.31

var os = require ('os');
console.log ("os platform = " + os.platform());
console.log ("os release = " + os.release());

const osName = require('os-name');

const fullOSName = osName(os.platform(), os.release());
console.log ("os name : " + fullOSName);

/* Result on Ubuntu 19.10

$ node os-name.js
os platform = linux
os release = 5.3.0-24-generic
os name : Linux 5.3

*/

/* Result on Windows 10 1909

>node os-name.js
os platform = win32
os release = 10.0.18363
os name : Windows 10

*/
