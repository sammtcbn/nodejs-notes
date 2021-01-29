/*
need to npm install regedit
ref: https://www.npmjs.com/package/regedit
Written by sammtcbn 2020.1.13
*/

var regedit = require('regedit')

regedit.list('HKLM\\SOFTWARE\\Node.js')
.on('data', function(entry) {
    var node_install_path = entry.data.values.InstallPath.value;
    var node_install_ver = entry.data.values.Version.value;
    console.log(entry.key);
    console.log(entry.data);
    console.log("node.js install in " + node_install_path);
    console.log("node.js version is " + node_install_ver);
})

/* Result on Windows 10 + Node.js v13.6.0 64bit

>node show-nodejs_registry.js
HKLM\SOFTWARE\Node.js
{
  keys: [ 'Components' ],
  values: {
    InstallPath: { type: 'REG_SZ', value: 'C:\\Program Files\\nodejs\\' },
    Version: { type: 'REG_SZ', value: '13.6.0' }
  }
}
node.js install in C:\Program Files\nodejs\
node.js version is 13.6.0

*/
