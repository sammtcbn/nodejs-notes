/*
ref to https://nodejs.org/docs/latest/api/globals.html#globals_dirname
*/

console.log("__dirname is " + __dirname);
console.log("__filename is " + __filename);

var path = require("path");
var absolutePath = path.resolve ("./path_ex.js");
console.log ("absolutePath is " + absolutePath);

var root = path.dirname (require.main.filename);
console.log ("root is " + root);

/* Result:

$ node path_ex.js
__dirname is /home/sam/spe/lang/node.js/src1
__filename is /home/sam/spe/lang/node.js/src1/path_ex.js
absolutePath is /home/sam/spe/lang/node.js/src1/path_ex.js
root is /home/sam/spe/lang/node.js/src1

*/
