/*
need to npm install systeminformation
Written by sammtcbn 2020.3.6
*/

const si = require('systeminformation');

si.cpu(function(data) {
    console.log (data);
})

/* Result:

>node systeminformation_cpu.js
{
  manufacturer: 'Intel®',
  brand: 'Core™ i7-4790',
  vendor: 'GenuineIntel',
  family: '6',
  model: '60',
  stepping: '3',
  revision: '15363',
  voltage: '',
  speed: '3.60',
  speedmin: '',
  speedmax: '3.60',
  governor: '',
  cores: 8,
  physicalCores: 4,
  processors: 1,
  socket: 'LGA1155',
  cache: { l1d: 0, l1i: 0, l2: 1048576, l3: 8388608 }
}

*/
