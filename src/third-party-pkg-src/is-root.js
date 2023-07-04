/*
need to npm install is-root
Written by sammtcbn 2021.3.19
*/

// index.js
const isRoot = require('is-root');

var result;

result = isRoot();

console.log (result);

/* Result:

$ node is-root.js
false

$ sudo node is-root.js
true

*/
