/*
need to npm install systeminformation
Written by sammtcbn 2020.3.6
*/

const si = require('systeminformation');

si.osInfo(function(data) {
    console.log (data);
})

/* Result on Ubuntu 19.10:

$node systeminformation_osinfo.js
{
  platform: 'linux',
  distro: 'Ubuntu',
  release: '19.10',
  codename: 'Eoan Ermine',
  kernel: '5.3.0-40-generic',
  arch: 'x64',
  hostname: 'devserver',
  codepage: 'UTF-8',
  logofile: 'ubuntu',
  serial: 'a1bb0292373641ae8e38ff3c6b2b3ecd',
  build: '',
  servicepack: '',
  uefi: true
}

Result on Windows 10:

>node systeminformation_osinfo.js
{
  platform: 'win32',
  distro: 'Microsoft Windows 10 Enterprise LTSC',
  release: '10.0.17763',
  codename: '',
  kernel: '10.0.17763',
  arch: 'ia32',
  hostname: 'VM-WIN10',
  codepage: ' 437',
  logofile: 'windows',
  serial: '00424-80000-00000-AAOEM',
  build: '17763',
  servicepack: '0.0',
  uefi: false
}

*/
