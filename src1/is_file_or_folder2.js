const fs = require('fs').promises;

async function show (file) {
    const stats = await fs.lstat(file);
    if (stats.isFile())
       console.log(file + " is file");
    else if (stats.isDirectory())
       console.log(file + " is directory");
}

console.log ("start");

show ("/etc");
show ("/etc/passwd");

console.log ("end");

/* Result:

$ node is_file_or_folder2.js
start
end
/etc is directory
/etc/passwd is file

*/
