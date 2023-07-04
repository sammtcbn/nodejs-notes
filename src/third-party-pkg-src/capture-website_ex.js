// need:
//     npm install capture-website
// ref to https://www.npmjs.com/package/capture-website

const captureWebsite = require('capture-website');

(async () => {
	await captureWebsite.file('https://sindresorhus.com', 'screenshot.png');
})();
