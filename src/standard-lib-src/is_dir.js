/*
ref to https://stackoverflow.com/questions/15630770/node-js-check-if-path-is-file-or-directory
*/

const fs = require('fs');

function is_dir(path) {
    try {
        var stat = fs.lstatSync(path);
        return stat.isDirectory();
    } catch (e) {
        // lstatSync throws an error if path doesn't exist
        return false;
    }
}

console.log ("/etc is_dir ? " + is_dir ("/etc"));
console.log ("/etc/passwd is_dir ? " + is_dir ("/etc/passwd"));
console.log ("/123 is_dir ? " + is_dir ("/123"));

/* Result:

$ node is_dir.js
/etc is_dir ? true
/etc/passwd is_dir ? false
/123 is_dir ? false

*/
