const fs = require('fs');

function show (file) {
    var stats = fs.statSync(file);
    if (stats.isFile())
        console.log(file + " is file");
    if (stats.isDirectory())
        console.log(file + " is directory");
}

show ("/etc");
show ("/etc/passwd");


/* Result:

$ node is_file_or_folder.js
/etc is directory
/etc/passwd is file

*/
