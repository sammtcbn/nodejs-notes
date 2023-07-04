/*
need to npm install systeminformation
Written by sammtcbn 2020.3.6
*/

const si = require('systeminformation');
 
si.cpu(function(data) {
/*
    console.log('CPU Information:');
    console.log('- manufucturer: ' + data.manufacturer);
    console.log('- brand: ' + data.brand);
    console.log('- speed: ' + data.speed);
    console.log('- cores: ' + data.cores);
    console.log('- physical cores: ' + data.physicalCores);
    console.log('...');
*/
	var cpu_mode = data.manufacturer + " " + data.brand + " @" + data.speed + "GHz";
	console.log (cpu_mode);
})

/* Result:

$ node show-cpu-module.js
Intel® Pentium® N4200 @1.10GHz

*/
