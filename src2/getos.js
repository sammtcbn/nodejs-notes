// need to install getos
//     npm install getos
// ref: https://www.npmjs.com/package/getos
// Written by sammtcbn 2020.1.2

var getos = require('getos')
 
getos(function(e,os) {
  if(e) return console.log(e)
  console.log(os);
})

/* Result on Ubuntu 19.10

$ node getos.js
{
  os: 'linux',
  dist: 'Ubuntu Linux',
  codename: 'eoan',
  release: '19.10'
}

Result on Windows 10 Home 64Bit 1909

>node getos.js
{ os: 'win32' }

*/
