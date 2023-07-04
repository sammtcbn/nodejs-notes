// need to install regedit
//     npm install regedit
// ref: https://www.npmjs.com/package/regedit
// Written by sammtcbn 2020.1.2

var regedit = require('regedit')

regedit.list('HKLM\\SOFTWARE\\WOW6432Node\\Node.js')
.on('data', function(entry) {
    console.log(entry.key);
    console.log(entry.data);
})

/* Result on Windows 10 + Node.js v12.14 32bit

>node show-nodejs32bit_registry.js
HKLM\SOFTWARE\WOW6432Node\Node.js
{
  keys: [ 'Components' ],
  values: {
    InstallPath: { type: 'REG_SZ', value: 'C:\\Program Files (x86)\\nodejs\\' },
    Version: { type: 'REG_SZ', value: '12.14.0' }
  }
}

*/
