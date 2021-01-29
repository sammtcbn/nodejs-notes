// need to install linux-release-info
//     npm install linux-release-info
// ref: https://www.npmjs.com/package/linux-release-info
// Written by sammtcbn 2019.12.31

const releaseInfo = require('linux-release-info');

try {
    const infoSyncData = releaseInfo({mode: 'sync'});
    console.log(`You are using ${infoSyncData.pretty_name}`)
} catch (err) {
    console.error(`Error reading OS release info: ${err}`);
}

/* Result on Ubuntu 19.10

$ node linux-release-info.js
You are using Ubuntu 19.10

*/
