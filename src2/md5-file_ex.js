// need to npm install md5-file

const md5File = require('md5-file');
const filepath = "./md5-file_ex.js"
const hash  = md5File.sync (filepath) ;

console.log(hash);

/* Result:

$ node md5-file_ex.js
cb87d2863d6cfffb682684c0c29db684

$ md5sum md5-file_ex.js
cb87d2863d6cfffb682684c0c29db684  md5-file_ex.js

*/
